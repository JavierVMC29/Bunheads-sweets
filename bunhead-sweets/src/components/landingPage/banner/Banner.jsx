import styled from 'styled-components'

import device from '../../../breakpoints'

import bannerBg from '../../../images/bannerBg.jpg'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${bannerBg}) center center no-repeat;
  background-color: rgb(25 25 25 / 80%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: soft-light;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fontFamily};
  line-height: ${(props) => props.theme.lineHeight};
`

const ContentWrapper = styled.div`
  margin: 0;
  @media ${device.desktopL} {
    min-width: 1320px;
    max-width: 1320px;
  }

  @media ${device.laptopL} {
    min-width: 960px;
    max-width: 960px;
  }

  @media ${device.laptop} {
    min-width: 100%;
    max-width: 100%;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.bgColor};
  text-align: left;
  font-size: 5.96rem;
  font-weight: bold;
  margin: 0;
  @media ${device.laptopL} {
    font-size: 4.768rem;
  }
  @media ${device.tablet} {
    font-size: 3.815rem;
  }
  @media ${device.mobileL} {
    font-size: 3.052rem;
  }
  @media ${device.mobileM} {
    font-size: 3.052rem;
  }
  @media ${device.mobileS} {
    font-size: 3.052rem;
  }
`

const Phrase = styled.p`
  color: ${(props) => props.theme.bgColor};
  font-size: 1.563rem;
  @media ${device.laptopL} {
    font-size: 1.25rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
`

const CTAButton = styled.button`
  background-color: ${(props) => props.theme.btnBgColor};
  color: ${(props) => props.theme.btnColor};
  border: none;
  padding: 0.5rem 2rem;
  border-radius: ${(props) => props.theme.btnBorderRadius};
  font-size: 1.1rem;
  a {
    color: ${(props) => props.theme.btnColor};
    text-decoration: none;
    font-family: ${(props) => props.theme.fontFamily};
  }
`

const Banner = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Phrase>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
          Impedit qui veritatis quae eius distinctio ipsa?
        </Phrase>
        <CTAButton>
          <a href='#about'>Read more</a>
        </CTAButton>
      </ContentWrapper>
    </Container>
  )
}

export default Banner
