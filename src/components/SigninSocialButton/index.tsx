import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
  Button,
  ImageContainer,
  Text
} from './styles'

interface Props extends RectButtonProps {
  title: string
  svg: string
  source: ImageSourcePropType
}

const SigninSocialButton = ({ title, svg: Svg, source, ...rest }: Props) => {
  return (
    <Button {...rest} >
      <ImageContainer>
        <Image 
          source={source}
          resizeMode='contain'
          style={{
            width: 30,
            height: 25
          }}
        />
      </ImageContainer>

      <Text>
        {title}
      </Text>
    </Button>
  )
}

export default SigninSocialButton