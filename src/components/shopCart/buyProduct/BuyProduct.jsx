import React from 'react'
import RenderBuySect from './RenderBuySect';


const BuyProduct = ({arrayCart, setArrayCart}) => {

  // ----change amount array according to the value input---
  const changeAmount = e => {

    // ----read the value input---
    const newAmount = parseInt(e.target.value)
    
    // ----read the id Product---
    const idProd = e.target.parentElement.parentElement.parentElement.id

    // ----update the amount in the array of the cart---
    let newArray = arrayCart.map( prod => {
      if(prod.id === idProd) {
        prod.quantity = newAmount 
        return prod
      }  else {
        return prod
      }
    })
    setArrayCart(newArray)
  }

  const deleteProduct = e => {
    const id = e.target.parentElement.parentElement.parentElement.parentElement.id
    let deleteProduct = arrayCart.filter( prod => (
      prod.id !== id
    ))
    setArrayCart(deleteProduct)
  }

  return (
    <div className="containerBuy">
      {arrayCart.map( prod => (
        <RenderBuySect 
          prod={prod}
          changeAmount={changeAmount}
          deleteProduct={deleteProduct}
          key={prod.id}
        />
      ))}
      


    </div>
  )
}

export default BuyProduct
