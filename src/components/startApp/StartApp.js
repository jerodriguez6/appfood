import React from "react";
import { Link } from "react-router-dom";
import "./start.css";
import logo from "../../assets/img/logo.jpeg";

const start = () => {
    // console.log(screen.width, screen.height)
    return (
        <div className="screenDesktop">
            <div className="containerLogo">
                <img src={logo} alt="Los paisanos" />
            </div>

            <Link to="/products" className="linkStart">
                <button className="btnVerMenu">Ver Menú</button>
            </Link>

            <footer className="startFooter">
                <p>Contactanos - 320 971 6675</p>
                <p>CERRITO, SANTANDER - COLOMBIA</p>
            </footer>
        </div>
    );
};

export default start;
