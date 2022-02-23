import styled from 'styled-components'
import device from '../../breakpoints'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  font-family: ${(props) => props.theme.fontFamily};
  padding: 3rem 0;
  line-height: ${(props) => props.theme.lineHeight};
`

const SectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.desktopL} {
    min-width: 1320px;
    max-width: 1320px;
    justify-content: space-between;
  }
  @media ${device.laptopL} {
    min-width: 960px;
    max-width: 960px;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    min-width: 100%;
    max-width: 100%;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`

const Title = styled.h3`
  color: ${(props) => props.theme.mainColor};
`

const Content = styled.p``

const Footer = () => {
  return (
    <Container>
      <SectionsWrapper>
        <Section>
          <Title>Social Networks</Title>
          <Content>Hola</Content>
        </Section>
        <Section>
          <Title>Social Networks</Title>
          <Content>Hola</Content>
        </Section>
        <Section>
          <Title>Social Networks</Title>
          <Content>Hola</Content>
        </Section>
        <Section>
          <Title>Social Networks</Title>
          <Content>Hola</Content>
        </Section>
      </SectionsWrapper>
    </Container>
  )
}

export default Footer
