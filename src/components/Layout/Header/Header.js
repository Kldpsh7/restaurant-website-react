import React from "react";
import Heading from "../Heading/Heading";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../../assets/meals.jpg';
import { useState } from "react";
import Cart from "../../Cart/Cart";

import './Header.css';


const Header = () => {

    

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
                <HeaderCartButton onClick={cartButtonClick}/>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="food" />
            </div>
        </React.Fragment>
    )
}

export default Header;