import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session';
import axios from 'axios'

interface IAuthProviderProps {
  children: ReactNode
}

interface IUser {
  id?: string
  name?: string
  email?: string
  image?: string
  emailVerified?: boolean
  access_token?: string
}

interface IAuthContextData {
  user: IUser,
  signinWithGoogle(): Promise<void>
}

interface IAuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

const AuthContext = createContext({} as IAuthContextData)

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({})
  
  const signinWithGoogle = async () => {
    try {
      const CLIENT_ID = '633331541083-ppnrpv7b1b6dkft0g816es4g86lcitsv.apps.googleusercontent.com'
      const REDIRECT_URI = 'https://auth.expo.io/@christopher.estanislau/guardanota'
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      
      const authResponse = await AuthSession.startAsync({ authUrl }) as IAuthorizationResponse
      
      if (authResponse.type !== 'success') {
        throw new Error('Não foi possivel se autenticar via google!')
      }

      const userResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authResponse.params?.access_token}`)
      const userInfo: any = await userResponse.data

      setUser({
        email: userInfo.email,
        id:  userInfo.id,
        name:  userInfo.name,
        image:  userInfo.picture,
        emailVerified: userInfo.emailVerified,
        access_token: authResponse.params?.access_token
      })

      console.log(authResponse)
      
    } catch (error) {
      throw new Error(error as any)
    }
  }

  return (
    <AuthContext.Provider value={{ signinWithGoogle, user }}> 
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export {
  AuthProvider,
  useAuth
}