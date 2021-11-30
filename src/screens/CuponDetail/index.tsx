import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { useCupon } from '../../hooks/cupon'

import ItemPurchase from '../../components/ItemPurchase'
import { Container, Title, HeaderContainer, InfoContainer, Description } from './styles'

const CuponDetail = () => {
  const { updateCupon, cupon } = useCupon()
  
  const tests = {
    cuponId: 'f1f1f33f5wq0e8qwe1',
    cuponNumber: 32,
    store: 'Loja seu zé',
    storeId: 'f1f1f33f5wq0e8qwe7',
    date: '2021-10-27',
    quantity: 5,
  }

  const itens = [
    {
      itemId: 'dfasdf',
      name: 'Leite integral',
      value: 4.5,
      quantity: 1
    },
    {
      itemId: 'dfasdf',
      name: 'Leite integral',
      value: 4.5,
      quantity: 1
    },
    {
      itemId: 'dfasdf',
      name: 'Leite integral',
      value: 4.5,
      quantity: 1
    },
    {
      itemId: 'dfasdf',
      name: 'Leite integral',
      value: 4.5,
      quantity: 1
    }
  ]
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <HeaderContainer> 
        <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20}} onPress={() => updateCupon({ _id: undefined })}  >
          <Image 
            source={require('../../assets/icons/home.png')}
            resizeMode='contain'
            style={{
              width: 30,
              height: 25
            }}
          />
        </TouchableOpacity>
        <Title>Cupon {cupon.number}</Title>
      </ HeaderContainer>

      <View style={{ alignItems: 'center', width: '100%', padding: '10px' }}>
        <View style={{ borderRadius: '100%', overflow: 'hidden', width: `${RFValue(100)}px`, height: `${RFValue(100)}px` }}>
          <Image 
            source={require('../../assets/icons/home.png')}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />

        </View>
        <InfoContainer>
          <Description>Número: {tests.cuponNumber}</Description>
          <Description>Qtde. Intens: {tests.quantity}</Description>
          <Description>Loja: {tests.cuponNumber}</Description>
          <Description>Criação: {tests.date}</Description>
        </InfoContainer>
      </View>
      {cupon.items && cupon?.items.map((item) => <ItemPurchase item={item}/>)} 
    </Container>
  )
}

export default CuponDetail