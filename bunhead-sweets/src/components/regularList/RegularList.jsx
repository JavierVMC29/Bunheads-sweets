const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item._id} {...{ [resourceName]: item }}></ItemComponent>
      ))}
    </>
  )
}

export default RegularList
