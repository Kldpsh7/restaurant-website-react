import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Overlay from "../UI/Overlay/Overlay";

import './Cart.css';

const Cart = (props) => {
    return (
        <Overlay visibility={props.visibility}>
            <Card class='cart-card'>
                <div>
                    <p>Burger</p>
                </div>
                <div className="cart-total">
                    <span className="amount-text">Total Amount:</span>
                    <span className="amount">₹ 350.00</span>
                </div>
                <div className="cart-buttons-div">
                    <Button class='cart-close-btn' value='Close' onClick={props.onClose}/>
                    <Button class='order-btn' value='Order'/>
                </div>
            </Card>
        </Overlay>
    )
};

export default Cart;