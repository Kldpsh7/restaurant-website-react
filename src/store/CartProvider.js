import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => { 

    const [cartState,setCartState] = useState({
        items:[],
        totalAmount:0
    });
    
    const addToCartHandler = (item,quantity)=>{
        const itemIndex = cartContext.items.findIndex(i=>i.id===item.id);
        if(itemIndex>=0){
            cartContext.items[itemIndex].quantity+=Number(quantity);
            cartContext.totalAmount+=(item.price*quantity);
        }else{
            cartContext.items.push({
                id:item.id,
                name:item.name,
                price:item.price,
                quantity:Number(quantity)
            })
            cartContext.totalAmount+=item.price*quantity;
        }
        setCartState({
            items:[...cartContext.items],
            totalAmount:cartContext.totalAmount
        });
    };

    const removeFromCartHandler = (id,quantity,price)=>{
        if(quantity>1){
            const itemIndex = cartContext.items.findIndex(item=>item.id===id);
            cartContext.items[itemIndex].quantity--;
            cartContext.totalAmount-=price;
        }else{
            cartContext.items = cartContext.items.filter(item=>item.id!==id);
            cartContext.totalAmount-=price;
        }
        setCartState({
            items:[...cartContext.items],
            totalAmount:cartContext.totalAmount,
        });
    };

    const addQuantityHandler = (id,price) => {
        const itemIndex = cartContext.items.findIndex(item=>item.id===id);
        cartContext.items[itemIndex].quantity++;
        cartContext.totalAmount+=price;
        setCartState({
            items:[...cartContext.items],
            totalAmount:cartContext.totalAmount,
        });
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addToCartHandler,
        removeItem:removeFromCartHandler,
        addQuantity:addQuantityHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider