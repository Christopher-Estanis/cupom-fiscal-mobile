import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import UnauthRoutes from './unauth.routes'
import AuthRoutes from './auth.routes'
import CuponDetail from '../screens/CuponDetail'

import { useAuth } from '../hooks/auth'
import { useCupon } from '../hooks/cupon'

const Routes = () => {
  const { user } = useAuth()
  const { cupon } = useCupon()


  console.log({ id: user.id })

  const handleRoute = () => {
    
    if (user?.id) {
      if (cupon?._id) {
        return <CuponDetail />
      }

      return <AuthRoutes />
    }


    return <UnauthRoutes />
  }

  return (
    <NavigationContainer>
      {handleRoute()}
      {/* {user.id ? <AuthRoutes /> : <UnauthRoutes />} */}
    </NavigationContainer>
  )
}

export default Routes