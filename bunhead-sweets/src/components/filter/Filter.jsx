import styled from 'styled-components'

const Container = styled.div`
  line-height: ${(props) => props.theme.lineHeight};
`
const Checkbox = styled.input`
  padding: 0.25rem;
`

const Label = styled.label``

const Filter = ({ filterName, filterProducts }) => {
  return (
    <Container>
      <Checkbox
        id={filterName}
        type='checkbox'
        onChange={() => filterProducts(filterName)}
      ></Checkbox>
      <Label htmlFor={filterName}> {filterName}</Label>
    </Container>
  )
}

export default Filter
