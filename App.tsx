import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import FlashMessage from 'react-native-flash-message';

import Routes from './src/routes'
import theme from './src/global/styles/theme'
import Camera from './src/screens/Camera'

import { AuthProvider } from './src/hooks/auth'
import { CuponProvider } from './src/hooks/cupon'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  
  if (!fontsLoaded) return <AppLoading />
  
  return (
    <ThemeProvider theme={theme}>
      <FlashMessage />
        <AuthProvider>
          <CuponProvider>
            <Routes />
          </ CuponProvider> 
        </ AuthProvider> 
    </ThemeProvider>
  )
}