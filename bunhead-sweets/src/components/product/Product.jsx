import styled from 'styled-components'
import device from '../../breakpoints'

import defaultImage from '../../images/discord-loading-image-gif-4.gif'

const Container = styled.div`
  display: flex;
  border: solid 1px #aeaeae;
  border-radius: 0.25rem;
  line-height: ${(props) => props.theme.lineHeight};
  min-height: 294px;
  margin: 2rem 0;
  @media ${device.laptop} {
    flex-direction: column;
    width: auto;
  }
`
//350px width recommended
const ImageContainer = styled.div`
  width: 350px;
  background-color: #191919;
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  width: 80%;
`

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizeH2};
  font-weight: ${(props) => props.theme.fontWeightH2};
  margin: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontMobileSizeH2};
  }
`

const Price = styled.span`
  font-size: 1.5rem;
`

// max of 50 words
const Description = styled.p`
  text-align: justify;
`

const Category = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
  position: absolute;
  bottom: 0.5rem;
`

const Product = ({ product }) => {
  const { name, price, description, category, image } = product || {
    name: 'Loading...',
    price: 'Loading...',
    description: 'Loading...',
    category: 'Loading...'
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={image ? image : defaultImage}
          alt='Product image'
          title='Product image'
        ></Image>
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Price>${price}</Price>
        <Description>{description}</Description>
        <Category>{category}</Category>
      </InfoContainer>
    </Container>
  )
}

export default Product
