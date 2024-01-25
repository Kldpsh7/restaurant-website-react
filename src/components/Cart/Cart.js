import { useContext } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Overlay from "../UI/Overlay/Overlay";

import './Cart.css';
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const items = cartCtx.items;

    return (
        <Overlay visibility={props.visibility}>
            <Card class='cart-card'>
                {items.map(item=><CartItem name={item.name} price={item.price} quantity={item.quantity} key={item.id} id={item.id}/>)}
                <div className="cart-total">
                    <span className="amount-text">Total Amount:</span>
                    <span className="amount">₹ {cartCtx.totalAmount.toFixed(2)}</span>
                </div>
                <div className="cart-buttons-div">
                    <Button class='cart-close-btn' value='Close' onClick={props.onClose}/>
                    {items.length>0 && <Button class='order-btn' value='Order'/>}
                </div>
            </Card>
        </Overlay>
    )
};

export default Cart;