import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Card = styled.View`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 25px;

  border-bottom-color: #b5b5b5;
  border-bottom-width: 1px;

  padding: 15px 20px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`

export const ImageContainer = styled.View`
  border-radius: 30px;
  padding: 10px;
  margin-right: 10px;

  width: 50px;
  height: 50px;
  
  border: 2px solid #bababa;
` 

  /* height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px; */