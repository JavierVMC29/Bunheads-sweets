import styled from 'styled-components'
import device from '../../breakpoints'
import { useNavigate } from 'react-router-dom'

const Form = styled.form`
  max-width: 500px;
  margin: 0;
  padding: 0;

  @media ${device.tablet} {
    max-width: 500px;
  }
`

const InputWrapper = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
  :last-of-type {
    margin: 0;
  }
`

const Label = styled.label`
  color: ${(props) => props.theme.labelColor};
  font-size: 16px;
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  background: none;
  border: none;
  color: #555;
  border-bottom: ${(props) => props.theme.mainColor} solid 1px;
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    opacity: 1;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.mainColor};

  :hover {
    background-color: ${(props) => props.theme.btnColorHover};
    cursor: pointer;
  }
`

const WarningMessage = styled.p`
  color: ${(props) => props.theme.mainColor};
`

const SignInForm = () => {
  const navigate = useNavigate()
  const noUser = false
  const noPassword = false

  const signIn = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <Form onSubmit={signIn}>
      <InputWrapper>
        <Label htmlFor='email'>E-mail</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='E-mail*'
          required
        ></Input>
        {noUser ? <WarningMessage>User not found</WarningMessage> : ''}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='Password*'
          required
        ></Input>
        {noPassword ? <WarningMessage>Incorrect password</WarningMessage> : ''}
      </InputWrapper>
      <InputWrapper>
        <SubmitButton type='submit'>Sign in</SubmitButton>
      </InputWrapper>
    </Form>
  )
}

export default SignInForm
