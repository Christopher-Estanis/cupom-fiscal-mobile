import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Camera } from 'expo-camera'

const Dashboad = () => {
  const cameraRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [permission, setPermission] = useState<boolean | null>(null)

  const handlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setPermission(status === 'granted')
  }

  const handleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  const takePicture = async () => {
    if (cameraRef) {
      const data = await (cameraRef as any).current.takePictureAsync()
      console.log(data)
    } 
  }

  useEffect(() => {
    handlePermission()
  }, [])

  
  if (permission === null) return <View />
  if (permission === false) return <Text>Acesso negado, necessário aceitar a permissão da camera!</Text>
  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Camera 
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20 }} onPress={handleCameraType} >
            <Text style={{ fontSize: 20, marginBottom: 13, color: '#FFF' }}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity onPress={takePicture} style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fefefe',
          margin: 20,
          borderRadius: 10,
          height: 50
      }}>
        <FontAwesome name='camera' size={23} color='#FFF' />
      </TouchableOpacity>
    </View>
  )
}

export default Dashboad