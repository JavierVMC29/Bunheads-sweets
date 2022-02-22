import styled from 'styled-components'
import device from '../../breakpoints'

import SignInForm from '../../components/signInForm/SignInForm'

const Container = styled.main`
  min-height: 90vh;
  min-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.mainColor};
  background: linear-gradient(
    56deg,
    rgba(186, 95, 95, 1) 0%,
    #db677c 35%,
    rgba(255, 244, 239, 1) 100%
  );
`

const FormWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 2em;
  @media ${device.tablet} {
    max-width: 100%;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 60px;
`

const SignIn = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Sign in</Title>
        <SignInForm></SignInForm>
      </FormWrapper>
    </Container>
  )
}

export default SignIn
