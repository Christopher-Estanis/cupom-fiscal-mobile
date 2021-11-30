import React from 'react'
import { Image, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Title, PhotoContainer, ProfileDescription, Description } from './styles'

const Dashboad = () => {
  const nameWithAbbreviation = (text: string) => {
    const splitedName = text.split(' ')
    return splitedName.reduce((acc, value) => (`${acc} ${value.substr(0, 1)}.`), splitedName.shift())
  }
  
  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <PhotoContainer >
        <View style={{ borderRadius: '100%', overflow: 'hidden', padding: '15px', backgroundColor: '#eaeaea', border: 'solid 3px #cacaca' }}> 
          <Image 
            source={require('../../assets/icons/home.png')}
            resizeMode='contain'
            style={{  width: `${RFValue(100)}px`, height: `${RFValue(100)}px` }}
          />
          
        </View>
      </PhotoContainer>
      <View style={{ width: '100%', alignItems: 'center', paddingTop: '20px' }}>
        <Title>{nameWithAbbreviation('Christopher Estanislau Camargo')}</Title>
        <ProfileDescription>
          <Description>Email: Christopher.estanis@gmail.com</Description>
          <Description>Idade: 23 anos</Description>
        </ProfileDescription>
      </View>
    </Container>
  )
}

export default Dashboad