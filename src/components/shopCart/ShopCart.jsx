import React from 'react'
import BuyProduct from './buyProduct/BuyProduct';
import TotalBuy from './totalBuy/TotalBuy';
import logo from '../../assets/img/logo.png'
import { Icon } from '@iconify/react';
import './shopCart.css'
import { Link } from "react-router-dom";

const ShopCart = ({arrayCart, setArrayCart, totalValue}) => {
  return (
    <div className="screenDesktop-1">
      <header>
        <img src={logo} alt="Los Paisanos"/>
      </header>

      <div className="myOrder">
        <h4>Mi Pedido</h4>
        <Link to="/products">
          <Icon icon="ant-design:caret-down-outlined" color="#4d2400" height="30" />
        </Link>
      </div>

      <BuyProduct 
        arrayCart={arrayCart}
        setArrayCart={setArrayCart}
      />

      <TotalBuy 
        totalValue={totalValue}
        arrayCart={arrayCart}
      />
    </div>
  )
}

export default ShopCart
