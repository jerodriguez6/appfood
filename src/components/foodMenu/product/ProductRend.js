import React, {useState} from 'react'
import './product.css'

const Burger = ({title, description, image, price, id, arrayCart, setArrayCart}) => {

  // -------Read the amont of the product----
  const [quantity, getQuantity] = useState(0)
  const setQuantity = e => {
    getQuantity(e.target.value)
  }

  // -------create object width data of product----
  const readDataProduct = e => {
    e.preventDefault()
    
    // -------prevent to add product with amount zero----
    if (quantity === 0){
      return
    }
  
    // -------create object width data of product----
    let objectData = {
      "title": title, 
      "img": image,
      "id": e.target.id,
      "quantity": parseInt(quantity),
      "price": price
    }

     // -------filter and add amount to avoid repeated products----
    const exist = arrayCart.find(x => x.id === objectData.id)
    if (exist) {
      let addAmount = arrayCart.map(prod => {
        if(prod.id === objectData.id){
          prod.quantity += objectData.quantity
          return prod
        } else {return prod}
      })
      setArrayCart(addAmount)
    } else {
      setArrayCart([
         ...arrayCart, objectData
      ])
    }
    
    // -------reset amount----
    getQuantity(0)

  }

  return (
    <form className="containerProduct" id={id} onSubmit={readDataProduct}>

      <div className="textProduct">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="visualProduct">

        <div className="imgPr">
           <img src={image} alt={title} />
        </div>

        <div className="counter">
          <div className="price">
            <p>$ {price}</p>
            <input onChange={setQuantity} value={quantity} type="number" min="0" placeholder="0" />
          </div>
          <button type="submit">Adicionar</button>
        </div>

      </div>

    </form>
  )
}

export default Burger
