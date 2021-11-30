import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  
  `

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
`

export const Card = styled.View`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;

  border-top-color: #b5b5b5;
  border-top-width: 1px;
  
  padding: 10px 30px;
`