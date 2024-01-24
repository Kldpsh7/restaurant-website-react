import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import './Cart.css';

const Cart = (props) => {
    return (
        <div className={`overlay ${props.visibility}`}>
            <Card class='cart-card'>
                <div>
                    <p>Burger</p>
                </div>
                <div>
                    <span>Total Amount</span>
                    <span>350</span>
                </div>
                <div className="cart-buttons-div">
                    <Button class='cart-close-btn' value='Close' onClick={props.onClose}/>
                    <Button class='order-btn' value='Order'/>
                </div>
            </Card>
        </div>
    )
};

export default Cart;