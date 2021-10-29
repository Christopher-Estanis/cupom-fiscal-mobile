import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import UnauthRoutes from './unauth.routes'
import AuthRoutes from './auth.routes'

import { useAuth } from '../hooks/auth'

const Routes = () => {
  const { user } = useAuth()

  console.log({ id: user.id })

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <UnauthRoutes />}
    </NavigationContainer>
  )
}

export default Routes