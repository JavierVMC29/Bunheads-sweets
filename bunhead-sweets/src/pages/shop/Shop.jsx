import styled from 'styled-components'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { getImage } from '../../utils/images'

import RegularList from '../../components/regularList/RegularList'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Product from '../../components/product/Product'

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
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:8000/product')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((err) => console.error(err))
  }, [])

  const categoryFilters = ['Cakes', 'Cupcakes', 'Brownies']
  const sortFilters = [
    'Lower cost first',
    'Higher cost first',
    'A - Z',
    'Z - A',
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
          {products ? (
            <RegularList
              items={products}
              resourceName='product'
              itemComponent={Product}
            ></RegularList>
          ) : (
            ''
          )}
        </ProductsWrapper>
      </ShopSection>
    </Container>
  )
}

export default Shop
