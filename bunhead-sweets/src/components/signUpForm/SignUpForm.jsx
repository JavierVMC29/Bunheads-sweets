import styled from 'styled-components'

const Form = styled.form`
  max-width: 500px;
  margin: 0;
  padding: 0;
`

const NamesSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

const LocationSection = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: 2em;
`

const InputWrapper = styled.div`
  padding: 0;
  margin-bottom: 2em;
`
const SelectWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: ${(props) => props.theme.LabelColor};
  font-size: 16px;
  margin-bottom: 0.5rem;
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

const Select = styled.select`
  background-color: transparent;
  border: none;
  color: #555;
  -webkit-appearance: none;
  :focus {
    outline: none;
  }
`

const Option = styled.option`
  background-color: transparent;
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
    background-color: ${(props) => props.theme.btnBgColorHover};
    cursor: pointer;
  }
`

const WarningMessage = styled.p`
  color: ${(props) => props.theme.mainColor};
`

const SignUpForm = () => {
  const emailAvailable = true
  const signUp = () => {
    console.log('Sign up')
  }

  return (
    <Form onSubmit={signUp}>
      <NamesSection>
        <InputWrapper>
          <Label htmlFor='firstname'>Name</Label>
          <Input
            id='firstname'
            name='firstname'
            type='text'
            placeholder='Name*'
            required
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='lastname'>Last name</Label>
          <Input
            id='lastname'
            name='lastname'
            type='text'
            placeholder='Last name*'
            required
          ></Input>
        </InputWrapper>
      </NamesSection>
      <LocationSection>
        <SelectWrapper>
          <Label htmlFor='country'>Country</Label>
          <Select id='country' name='country' required>
            <Option value='Ecuador'>Ecuador</Option>
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Label htmlFor='city'>City</Label>
          <Select id='city' name='city' required>
            <Option value='Guayaquil'>Guayaquil</Option>
            <Option value='Daule'>Daule</Option>
            <Option value='Samborondon'>Samborondón</Option>
            <Option value='Duran'>Durán</Option>
          </Select>
        </SelectWrapper>
      </LocationSection>
      <InputWrapper>
        <Label htmlFor='address'>Address</Label>
        <Input
          id='address'
          name='address'
          type='text'
          placeholder='Address*'
          required
        ></Input>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor='phone'>Phone</Label>
        <Input
          id='phone'
          name='phone'
          type='tel'
          placeholder='Phone*'
          required
        ></Input>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor='email'>E-mail</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='E-mail*'
          required
        ></Input>
        {!emailAvailable ? (
          <WarningMessage>This email is not available</WarningMessage>
        ) : (
          ''
        )}
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
      </InputWrapper>
      <InputWrapper>
        <SubmitButton type='submit'>Sign up</SubmitButton>
      </InputWrapper>
    </Form>
  )
}

export default SignUpForm
