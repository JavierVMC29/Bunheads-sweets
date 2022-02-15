import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.main`
  background-color: ${(props) => props.theme.mainColor};
  height: 100vh;
  font-family: ${(props) => props.theme.fontFamily};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: ${(props) => props.theme.bgColor};
`

const Message = styled.p`
  color: ${(props) => props.theme.bgColor};
  a {
    color: ${(props) => props.theme.bgColor};
  }
`

const PageNotFound = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>404: Page not found</Title>
        <Message>
          Check the web address and try again or return to the Bunhead's Sweets{' '}
          <Link to='/'>home page</Link>.
        </Message>
      </ContentWrapper>
    </Container>
  )
}

export default PageNotFound
