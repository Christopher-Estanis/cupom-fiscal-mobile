import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { useCupon } from '../../hooks/cupon'

import ItemPurchase from '../../components/ItemPurchase'
import { Container, Title, HeaderContainer, InfoContainer, Description } from './styles'

const CuponDetail = () => {
  const { updateCupon, cupon } = useCupon()
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <HeaderContainer> 
        <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20}} onPress={() => updateCupon({ _id: undefined })}  >
          <Image 
            source={require('../../assets/icons/arrow-left-45-32.png')}
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
            source={{ uri: cupon.image || 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg' }}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />

        </View>
        <InfoContainer>
          <Description>Número: {cupon.number}</Description>
          <Description>Qtde. Intens: {cupon.itemsQuantity}</Description>
          <Description>Loja: {cupon.store}</Description>
          <Description>Criação: {cupon.createdAt}</Description>
        </InfoContainer>
      </View>
      {cupon.items && cupon?.items.map((item) => <ItemPurchase item={item}/>)} 
    </Container>
  )
}

export default CuponDetail