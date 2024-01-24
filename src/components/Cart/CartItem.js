import { useContext } from 'react';
import Button from '../UI/Button/Button';
import './CartItem.css';
import CartContext from '../../store/cart-context';

const CartItem = props => {
    const cartCtx = useContext(CartContext);

    const onDelete = () =>{
        cartCtx.removeItem(props.id,props.quantity,props.price);
    };

    return <div className='cart-item-div'>
    <span>{props.quantity}</span>
        <span>{props.name}</span>
        <span>₹{props.price*props.quantity}</span>
        <Button value='Delete' onClick={onDelete}/>
    </div>
};

export default CartItem;