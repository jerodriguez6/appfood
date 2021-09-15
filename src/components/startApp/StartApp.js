import React from 'react'
import { Link } from "react-router-dom";
import './start.css'
import logo from "../../assets/img/logo.png" 

const start = () => {
  // console.log(screen.width, screen.height)
  return (
      <div className="screenDesktop">
        <div className="containerLogo">
          <img src={logo} alt="Los paisanos" />
        </div>

        <Link to="/products" className="linkStart"><button className="btnVerMenu">Ver Menú</button></Link>    
          
        <footer className="startFooter">
          <p>Contactanos - 310 416 5543</p>
          <p>Calle 1E NO.1B-05 SUR LA CONVENCIÓN</p>
        </footer>
      </div>
  )
}

export default start
