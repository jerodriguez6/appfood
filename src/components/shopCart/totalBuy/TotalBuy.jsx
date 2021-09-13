import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const TotalBuy = ({totalValue, arrayCart}) => {

  // ----------order message--------
  const [arraymessage, setarraymessage] = useState('Orden')
  
  useEffect(() => {
    let text = ''

    // ----------string with info of each product--------
    arrayCart.map(prod => (    
      text += prod.title + ' - Cant: ' + prod.quantity + ', '
    ))

    text += ' Valor Total: $ '+totalValue
    setarraymessage(text)

  }, [arrayCart, totalValue])

  let url = 'https://wa.me/573104165543?text='

  return (
    <div className="totalBuy">

      <div className="price">
        <h2>TOTAL</h2>
        <p>$ {totalValue}</p>
      </div>

      <div className="containerBtn">
        <div className="btn">
          <Link to="/products" className="linkBack">
            <Icon icon="eva:arrow-ios-back-outline" color="#4d2400" height="25" />
            <p>Atrás</p>
          </Link>     
        </div>
        <a href={url+arraymessage} target="_blank" rel="noopener noreferrer" className="btnOrder">Hacer Pedido</a>
        
      </div>

    </div>
  )
}

export default TotalBuy
