import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'

import { useCupon } from '../hooks/cupon'

import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import Cupons from '../screens/Cupons'
import Categories from '../screens/Categories'
import Camera from '../screens/Camera'

import TabBarIcon from '../components/TabBarScreen'
import * as ImagePicker from 'expo-image-picker'

const Tab = createBottomTabNavigator()

interface ICustomTabBarButtom {
  children: ReactNode
  onPress: ((e: GestureResponderEvent | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined
}


{/* <TouchableOpacity style={{ position: 'absolute', bottom: 60, right: 20 }} onPress={() => ImagePicker.launchCameraAsync({})} >
        <Text style={{ fontSize: 20, marginBottom: 13, color: '#FFF' }}>Trocar</Text>
      </TouchableOpacity> */}


const AuthRoutes = () => {
  const { createCupon } = useCupon()

  const blaBla = async () => {
    console.log({ test: true })
    
    const result: any = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images })
  
    const response = await fetch(result.uri)

    const blob = await response.blob()
    
    createCupon({ image: blob })
  }
  
  const CustomTabBarButtom = ({ children, onPress }: ICustomTabBarButtom) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => blaBla()}
    >
      <View 
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: '#531fc2'
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
  
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarShowLabel: false, 
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#000',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        height: 50
      } 
    }} >
      <Tab.Screen  
        name="Dashboard"  
        component={Dashboard} 
        options={{ tabBarIcon: ({ focused }) => ( 
          <TabBarIcon source={require('../assets/icons/home.png')} focused={focused} /> 
        )}} 
      />
      <Tab.Screen 
        name="Cupons"     
        component={Cupons} 
        options={{ tabBarIcon: ({ focused }) => ( <TabBarIcon source={require('../assets/icons/list.png')} focused={focused} /> ) }} 
      />
      <Tab.Screen name="Camera" component={Camera} options={{
        tabBarIcon: () => ( 
          <Image 
            source={require('../assets/icons/camera.png')} 
            resizeMode='contain'
            style={{
              width: 40,
              height: 35,
              tintColor: '#fff'
            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabBarButtom  onPress={props.onPress} { ...props } />
        )
      }} />
      <Tab.Screen 
        name="Categories"    
        component={Categories} 
        options={{ tabBarIcon: ({ focused }) => ( <TabBarIcon source={require('../assets/icons/shopping_basket.png')} focused={focused} /> ) }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ tabBarIcon: ({ focused }) => ( <TabBarIcon source={require('../assets/icons/person.png')} focused={focused} /> ) }} 
      />
    </Tab.Navigator>
  )
}

export default AuthRoutes