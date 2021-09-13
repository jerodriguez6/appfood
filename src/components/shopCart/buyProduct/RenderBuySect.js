import React from 'react'
import { Icon } from '@iconify/react';

const RenderBuySect = ({prod, changeAmount, deleteProduct}) => {


  return (
    <div className="productBuy" id={prod.id}>
          <img src={prod.img} alt="burger" />

          <div className="infoProductBuy">

            <div className="title">
              <h3>{prod.title}</h3>
              <Icon onClick={deleteProduct} icon="carbon:close-filled" color="#4d2400" height="20" />
            </div>  

            <div className="counterBuy">
              <p>$ {prod.price*prod.quantity}</p>
              <input onChange={changeAmount} value={prod.quantity} type="number" min="0" placeholder="0" />
            </div>

          </div>
        </div>
  )
}

export default RenderBuySect
