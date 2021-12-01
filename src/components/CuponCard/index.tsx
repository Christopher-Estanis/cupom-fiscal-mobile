import React from 'react'
import { View, Image } from 'react-native'
import dayjs from 'dayjs'
import { RectButtonProps } from 'react-native-gesture-handler'

import { useCupon } from '../../hooks/cupon'

import { Card, Text, Title, ImageContainer } from './styles'

interface Props extends RectButtonProps {
  cupon: {
    _id?: string
    number?: number
    itemsQuantity?: number
    store?: string
    createdAt?: Date
    updatedAt?: Date 
    image?: string
    items?: {
      _id: string
      name: string
      value: number
      quantity: number
    }[]
  }
}

const Dashboad = ({ cupon, ...rest }: Props) => {
  const { updateCupon } = useCupon()
  
  return (
    <Card {...rest} onPress={() => updateCupon({ cupon })} >
      <ImageContainer > 
        <Image 
          source={{ uri: cupon.image || 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg' }}
          resizeMode='contain'
          style={{ width: '100%', height: '100%'}}
        />
      </ImageContainer>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
        <Title>Cupon {cupon?.number}</Title>
        <Text>Itens: {cupon?.itemsQuantity}</Text>
      </View>
      <Text>{dayjs(cupon?.createdAt).format('DD/MM/YYYY')}</Text>
    </Card>
  )
}

export default Dashboad