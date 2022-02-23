import styled from 'styled-components'

import device from '../../../breakpoints'

import logo from '../../../images/logo.png'

const Container = styled.section`
  display: flex;
  justify-content: center;

  font-family: ${(props) => props.theme.fontFamily};

  width: 100%;

  background-color: ${(props) => props.theme.bgColor};

  padding: 5rem 0;

  line-height: ${(props) => props.theme.lineHeight};
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

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
    flex-direction: column;
  }
  @media ${device.tablet} {
    min-width: 100%;
    max-width: 100%;
    flex-direction: column-reverse;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  margin: 1rem;
  @media ${device.mobileL} {
    margin: 0;
    width: 95%;
  }
`
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 0.25rem;

  @media ${device.laptop} {
    width: 400px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`
const InfoContainer = styled.div`
  flex: 1;
  margin: 1rem;
`

const Title = styled.h2`
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => props.theme.fontSizeH2};
  margin: 0;
  font-weight: ${(props) => props.theme.fontWeightH2};
`

const Hr = styled.hr`
  border: solid 0.1rem ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.mainColor};
`

const Description = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: justify;
`

const About = () => {
  return (
    <Container id='about'>
      <ContentWrapper>
        <ImageContainer>
          <Image
            src={logo}
            title='Bunheads sweets logo'
            alt='Bunheads sweets logo'
            role='presentation'
          ></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>About us</Title>
          <Hr></Hr>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            similique fuga exercitationem debitis mollitia iusto quas itaque
            dolore cupiditate minus odit eligendi, facere id consequatur,
            possimus ipsa. Distinctio, exercitationem dolore? Ad quo voluptas
            enim molestiae dignissimos odit. Velit voluptates quidem facere at
            placeat quia dolorum quas dicta sunt. Quaerat corporis soluta nobis
            ullam, quod fugit repudiandae quos ducimus quis qui numquam
            blanditiis. Consectetur, sint tempore eveniet eligendi atque quo
            suscipit omnis? Ad iure, quaerat facere molestias laborum quidem
            quae debitis adipisci blanditiis aliquid nihil illum. Mollitia eaque
            assumenda quos, corrupti voluptatibus, culpa quam ipsum dolorem
            ipsam velit exercitationem quaerat suscipit.
          </Description>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  )
}

export default About
