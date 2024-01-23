import React from "react";
import Heading from "../Heading/Heading";
import Card from "../../UI/Card/Card";
import HeaderCartButton from "./HeaderCartButton";
import './Header.css';
import mealsImage from '../../../assets/meals.jpg';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className="header">
                <Heading class='main-heading' value='NeelKamal' />
                <HeaderCartButton/>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="food" />
            </div>
        </React.Fragment>
    )
}

export default Header;