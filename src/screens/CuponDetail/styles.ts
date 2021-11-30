import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  
  `

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
`

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  padding: 10px 15px;

  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.View`
  width: 100%;
  padding: 0px 10px; 
  margin-top: 10px;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Description = styled.View`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`