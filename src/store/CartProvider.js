import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => { 
    
    const addToCartHandler = (item)=>{
        const itemIndex = cartContext.items.findIndex(i=>i.id===item.id);
        if(itemIndex>=0){
            cartContext.items[itemIndex].quantity+=1;
            cartContext.totalAmount+=item.price;
        }else{
            cartContext.items.push({
                id:item.id,
                name:item.name,
                price:item.price,
                quantity:1
            })
            cartContext.totalAmount+=item.price;
        }
        setCartContext({
            items:[...cartContext.items],
            totalAmount:cartContext.totalAmount,
            addItem:addToCartHandler,
            removeItem:removeFromCartHandler,
        });
    };

    const removeFromCartHandler = (id,quantity,price)=>{
        cartContext.items = cartContext.items.filter(item=>item.id!==id);
        cartContext.totalAmount-=(quantity*price);
        setCartContext({
            items:[...cartContext.items],
            totalAmount:cartContext.totalAmount,
            addItem:addToCartHandler,
            removeItem:removeFromCartHandler,
        });
    };

    const [cartContext,setCartContext] = useState({
        items:[],
        totalAmount:0,
        addItem:addToCartHandler,
        removeItem:removeFromCartHandler,
    });

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider