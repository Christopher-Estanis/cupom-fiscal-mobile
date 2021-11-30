import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 20px;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
`

export const RadioContainer = styled.View`
  border: 1px solid #9f9f9f;
  border-radius: 30px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

 export const RadioButton = styled.TouchableHighlight`
  background-color: ${(props: any) => props.active ? props.theme.colors.primary : 'transparent'};
  padding: 5px 10px;
 `

 export const ButtonText = styled.Text`
  color: ${(props: any) => props.active ? props.theme.colors.background : props.theme.colors.text };
 `

 export const GraphicCard = styled.View`
  margin-top: 20px;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
 `