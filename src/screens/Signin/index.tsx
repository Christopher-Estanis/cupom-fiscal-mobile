import React, { useContext } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { showMessage } from 'react-native-flash-message'
import { Button } from 'react-native'

// import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
// import LogoSvg from '../../assets/logo.svg'
import SigninSocialButton from '../../components/SigninSocialButton'
import { useAuth } from '../../hooks/auth'

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Description,
  SigninTitle,
  Footer,
  FooterWrapper
} from './styles'

// showMessage({
//   message:  'test',
//   type: 'success',
//   position: 'top',
//   duration: 4000
// })

const Signin = () => {
  const { signinWithGoogle } = useAuth()

  const handleSigninWithGoogle = async () => {
    try {
      await signinWithGoogle()
    } catch (error) {
      console.warn(error)
      showMessage({
        message: (error as any).message || 'Não foi possível realizar o cadastro, por favor tente mais tarde!',
        type: 'warning',
        position: 'top',
        duration: 4000
      })
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>GuardaNota</Title>
          <Description>
            Arquive suas notas {'\n'}
            de forma simples 
          </Description>
        </TitleWrapper>

        <SigninTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SigninTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          {/* <GoogleSvg></GoogleSvg> */}
          
          <SigninSocialButton 
            title='Entrar com Google'
            svg='G'
            source={require('../../assets/icons/google.png')}
            onPress={handleSigninWithGoogle}
          />
          <SigninSocialButton 
            title='Entrar com Apple'
            svg='A'
            source={require('../../assets/icons/apple.png')}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}

export default Signin