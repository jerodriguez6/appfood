import React, { useState } from "react";
import Slider from "./slider/Slider";
import Total from "./totalPrice/Total";
import logo from "../../assets/img/logo.jpeg";
import "./Products.css";
import Product from "./product/Product";

const Products = ({ arrayCart, setArrayCart, totalValue, setTotalValue }) => {
    // -------state to filter products according to category------
    const [nameCategory, updateCategory] = useState("burger");

    return (
        <div className="screenDesktop-1">
            <header>
                <img src={logo} alt="Los Paisanos" />
            </header>

            <h3>Categorías</h3>
            <Slider updateCategory={updateCategory} />

            <div className="containerProducts">
                <Product
                    nameCategory={nameCategory}
                    setArrayCart={setArrayCart}
                    arrayCart={arrayCart}
                />
            </div>

            <Total
                arrayCart={arrayCart}
                totalValue={totalValue}
                setTotalValue={setTotalValue}
            />

            <footer className="footerProducts">
                <p>Contactanos - 320 971 6675</p>
            </footer>
        </div>
    );
};

export default Products;
