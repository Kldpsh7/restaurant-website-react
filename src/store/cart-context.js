import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item,quantity)=>{},
    removeItem:(id,quantity,price)=>{},
    addQuantity:(id,price)=>{},
})

export default CartContext;