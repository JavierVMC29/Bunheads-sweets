import styled from 'styled-components'
import device from '../../breakpoints'
import { useNavigate } from 'react-router-dom'

const Form = styled.form``

const InputWrapper = styled.div``

const Label = styled.label``

const Input = styled.input``

const SubmitButton = styled.button``

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
