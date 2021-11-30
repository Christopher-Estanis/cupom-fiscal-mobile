import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Card = styled(RectButton)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 25px;

  border-top-color: #b5b5b5;
  border-top-width: 1px;

  padding: 10px 30px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 30px;
`

  /* height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px; */