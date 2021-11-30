import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  
  width: 95%;
  padding: 15px 50px 15px 20px;
  margin-bottom: 5px;

  position: relative;
  border-radius: 5px;
`

export const Description = styled.View`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background};
`