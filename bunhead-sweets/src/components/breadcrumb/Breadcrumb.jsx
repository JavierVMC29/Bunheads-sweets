import styled from 'styled-components'
import device from '../../breakpoints'
import bannerBg from '../../images/bannerBg.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  width: 100%;
  background: url(${bannerBg}) bottom center no-repeat;
  background-color: rgb(25 25 25 / 80%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: soft-light;
  line-height: ${(props) => props.theme.lineHeight};
  @media ${device.tablet} {
    padding: 1rem 0;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.bgColor};
  font-size: ${(props) => props.theme.fontSizeH1};
  font-weight: ${(props) => props.theme.fontWeightH1};
  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontMobileSizeBreadcrumbTitle};
  }
`

const Breadcrumb = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default Breadcrumb
