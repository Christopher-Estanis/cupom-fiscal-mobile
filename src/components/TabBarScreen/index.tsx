import React from 'react'
import { ImageSourcePropType, Image } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import { IconContainer } from './styles'

interface Props extends RectButtonProps {
  focused: boolean
  source: ImageSourcePropType
}


const TabBarIcon = ({ focused, source }: Props) => {
  return (
    <IconContainer >
      <Image 
        source={source}
        resizeMode='contain'
        style={{
          width: 30,
          height: 25,
          tintColor: focused ? '#531fc2' : '#fff'
        }}
        />
    </IconContainer>
  )
}

export default TabBarIcon