import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Description, Container } from './styles'

interface Props extends RectButtonProps {
  item: {
    _id: string
    name: string
    value: number
    quantity: number
  }
}

const ItemPurchase = ({ item }: Props): JSX.Element => {  
  const [editable, setEditable] = useState(false)
  
  // if (editable) {
  //   return (
  //     <Container>

  //     </Container>
  //   )
  // }

  return (
    <Container >
      <Description >{item.name}</Description>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Description >Valor: {item.value}</Description>
        <Description >Quantidade: {item.quantity}</Description>
      </View>
      <View style={{ height: '100%', width: '30px', backgroundColor: '#a98980', position: 'absolute', top: '0', right: '0' }} />
    </Container>
  )
}

export default ItemPurchase