import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background}; 
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
`

export const PhotoContainer = styled.View`
  height: ${RFValue(300)}px;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
`

export const ProfileDescription = styled.View`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding:  20px;
`

export const Description = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`