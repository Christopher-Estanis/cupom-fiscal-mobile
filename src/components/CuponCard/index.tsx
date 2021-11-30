import React from 'react'
// import { Text } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import { useCupon } from '../../hooks/cupon'

import { Card, Text } from './styles'

interface Props extends RectButtonProps {
  cupon: {
    _id?: string
    number?: number
    itemsQuantity?: number
    store?: string
    createdAt?: Date
    updatedAt?: Date 
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
      <Text>Cupon {cupon?.number}</Text>
      <Text>{cupon?.store}</Text>
      <Text>Itens: {cupon?.itemsQuantity}</Text>
      <Text>{cupon?.createdAt}</Text>
    </Card>
  )
}

export default Dashboad