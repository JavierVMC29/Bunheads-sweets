import styled from 'styled-components'

import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Product from '../../components/product/Product'

import demoImage from '../../images/chocoCupcakes.jpg'

const Container = styled.main`
  background-color: ${(props) => props.theme.bgColor};
`
const ShopSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
`
const FiltersWrapper = styled.div`
  width: 20%;
`
const ProductsWrapper = styled.div`
  width: 70%;
  padding: 0 2rem;
`
const Shop = () => {
  const product = {
    name: 'Choco Cupcakes',
    price: 10,
    description:
      'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
    category: 'Cupcakes',
    image: demoImage
  }
  return (
    <Container>
      <Breadcrumb title='Shop'></Breadcrumb>
      <ShopSection>
        <FiltersWrapper></FiltersWrapper>
        <ProductsWrapper>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
        </ProductsWrapper>
      </ShopSection>
    </Container>
  )
}

export default Shop
