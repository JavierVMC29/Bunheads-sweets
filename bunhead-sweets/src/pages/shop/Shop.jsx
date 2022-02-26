import styled from 'styled-components'

import { useState, useEffect } from 'react'

import RegularList from '../../components/regularList/RegularList'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Product from '../../components/product/Product'

import demoImage from '../../images/chocoCupcakes.jpg' //delete this later
import Filter from '../../components/filter/Filter'

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

const FilterType = styled.h3`
  font-size: ${(props) => props.theme.fontSizeH3};
`
const FiltersContainer = styled.div`
  margin-left: 1rem;
`

const ProductsWrapper = styled.div`
  width: 70%;
  padding: 0 2rem;
`
const Shop = () => {
  //mock data
  const [products, setProducts] = useState([
    {
      name: 'Choco Cupcakes',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Cupcakes',
      image: demoImage
    },
    {
      name: 'Vanilla Cupcakes',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Cupcakes',
      image: demoImage
    },
    {
      name: 'Choco Cake',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Cakes',
      image: demoImage
    },
    {
      name: 'Vanilla Cake',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Cakes',
      image: demoImage
    },
    {
      name: 'Choco Brownies',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Brownies',
      image: demoImage
    },
    {
      name: 'Vanilla Brownies',
      price: 10,
      description:
        'Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.Cupcakes made of chocolate and cover with vanilla cream.',
      category: 'Brownies',
      image: demoImage
    }
  ])

  const categoryFilters = ['Cakes', 'Cupcakes', 'Brownies']
  const sortFilters = [
    'Lower cost first',
    'Higher cost first',
    'A - Z',
    'Z - A'
  ]

  const filterProducts = (category) => {
    const newProducts = products.filter((product) => {
      return product.category === category
    })
    setProducts(newProducts)
  }

  return (
    <Container>
      <Breadcrumb title='Shop'></Breadcrumb>
      <ShopSection>
        <FiltersWrapper>
          <FilterType>Categories</FilterType>
          <FiltersContainer>
            {categoryFilters.map((name, i) => (
              <Filter
                filterName={name}
                filterProducts={filterProducts}
                setProducts={setProducts}
              ></Filter>
            ))}
          </FiltersContainer>
          <FilterType>Sort by</FilterType>
          <FiltersContainer>
            {sortFilters.map((name, i) => (
              <Filter
                filterName={name}
                filterProducts={filterProducts}
                setProducts={setProducts}
              ></Filter>
            ))}
          </FiltersContainer>
        </FiltersWrapper>
        <ProductsWrapper>
          <RegularList
            items={products}
            resourceName='product'
            itemComponent={Product}
          ></RegularList>
        </ProductsWrapper>
      </ShopSection>
    </Container>
  )
}

export default Shop
