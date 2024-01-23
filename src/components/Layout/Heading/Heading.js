import React from "react";
import './Heading.css'

const Heading = (props) => {
    return (
        <h1 className={props.class}>{props.value}</h1>
    )
}

export default Heading