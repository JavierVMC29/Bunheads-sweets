import styled from 'styled-components'

import SignUpForm from '../../components/signUpForm/SignUpForm'

const Container = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(186, 95, 95);
  background: linear-gradient(
    56deg,
    rgba(186, 95, 95, 1) 0%,
    #db677c 35%,
    rgba(255, 244, 239, 1) 100%
  );
`

const FormWrapper = styled.div`
  background-color: var(--colorClaro);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 2em;
`

const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 60px;
`

const SignUp = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Sign up</Title>
        <SignUpForm></SignUpForm>
      </FormWrapper>
    </Container>
  )
}

export default SignUp
