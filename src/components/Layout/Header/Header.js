import React from "react";
import Heading from "../Heading/Heading";
import Card from "../../UI/Card/Card";
import './Header.css'


const Header = (props) => {
    return (
        <div className="header">
            <Heading class='main-heading' value='NeelKamal' />
            <Card class='cart-card'>
                <h3>🛒 Your Cart</h3>
                <Card class='cart-quantity'>0</Card>
            </Card>
        </div>
    )
}

export default Header;