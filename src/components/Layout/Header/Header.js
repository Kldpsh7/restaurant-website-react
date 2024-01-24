import React from "react";
import Heading from "../Heading/Heading";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../../assets/meals.jpg';
import { useState,useContext } from "react";
import Cart from "../../Cart/Cart";
import CartContext from "../../../store/cart-context";

import './Header.css';


const Header = () => {

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.length;

    const [cartVisibility,setCartVisibility] = useState('');

    const cartButtonClick = () => {
        setCartVisibility('visible');
    };

    const closeCartHandler = () => {
        setCartVisibility('');
    };

    return (
        <React.Fragment>
            <Cart visibility={cartVisibility} onClose={closeCartHandler}/>
            <header className="header">
                <Heading class='main-heading' value='NeelKamal' />
                <HeaderCartButton onClick={cartButtonClick} itemsInCart={numberOfCartItems}/>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="food" />
            </div>
        </React.Fragment>
    )
}

export default Header;