import React from 'react'
import allProducts from '../../../assets/image'
import Burger from './ProductRend'

const Product = ({nameCategory, arrayCart, setArrayCart}) => {

  
  return (
    <>
    {allProducts.map( product => 
      product.category === nameCategory
    ? (

      <Burger 
      title={product.title}
      description={product.description}
      image={product.img}
      price={product.unPrice}
      arrayCart={arrayCart}
      setArrayCart={setArrayCart}
      id={product.id}
      key={product.id}
    />
    ) : null
    )}
    </>
  )
}

export default Product
 // const [products, setProducts] = useState()
  // let productFilter = allProducts.filter(product => product.category === nameCategory)

  // useEffect(()=>{
  //   setProducts(productFilter)
  //   console.log(products)
  // }, [])