import { useContext } from 'react';
import Button from '../UI/Button/Button';
import './CartItem.css';
import CartContext from '../../store/cart-context';

const CartItem = props => {
    const cartCtx = useContext(CartContext);

    const onDelete = () =>{
        cartCtx.removeItem(props.id,props.quantity,props.price);
    };

    const onAdd = () => {
        cartCtx.addQuantity(props.id,props.price);
    }

    return <>
        <div className='cart-item-div'>
            <div className='cartItem-info-div'>
                <span className='cart-item-name'>{props.name}</span>
                <span className='cart-item-price'>₹{props.price.toFixed(2)}</span>
            </div>
            <span className='cart-item-quantity'>x {props.quantity}</span>
            <span className='cart-item-total'>₹{(props.price*props.quantity).toFixed(2)}</span>
            <div className='cartItem-button-div'>
                <Button value='-' onClick={onDelete}/>
                <Button value='+' onClick={onAdd}/>
            </div>
        </div>
        <hr/>
    </>
};

export default CartItem;