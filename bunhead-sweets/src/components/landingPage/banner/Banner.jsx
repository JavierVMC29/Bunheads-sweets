import styled from 'styled-components'
import { Link } from 'react-scroll'

import device from '../../../breakpoints'

import bannerBg from '../../../images/landingBannerBg.jpg'

const Container = styled.section`
  width: 100%;
  height: 95vh;
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
  font-size: ${(props) => props.theme.fontSizeBannerTitle};
  font-weight: ${(props) => props.theme.fontWeightH1};
  margin: 0;
  line-height: 1.5;
  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontMobileSizeBannerTitle};
  }
`

const Phrase = styled.p`
  color: ${(props) => props.theme.bgColor};
  font-size: ${(props) => props.theme.fontSizeBannerMessage};
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

const Button = styled.div`
  display: inline;
  background-color: ${(props) => props.theme.btnBgColor};
  color: ${(props) => props.theme.btnColor};
  padding: 0.5rem 0;
  border: none;
  border-radius: ${(props) => props.theme.btnBorderRadius};
  font-size: 1.1rem;

  a {
    width: 100%;
    text-decoration: none;
    padding: 0.5rem 2rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.btnBgColorHover};
  }
`

const Banner = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          The best place to get <br></br>the perfect dessert
        </Title>
        <Phrase>We make your sweets the way you want</Phrase>
        <Button>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Learn more
          </Link>
        </Button>
      </ContentWrapper>
    </Container>
  )
}

export default Banner
