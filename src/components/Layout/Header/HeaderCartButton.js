import './HeaderCartButton.css';
import CartIcon from '../../Cart/CartIcon';

const HeaderCartButton = (props) => {
    return <button className='button' onClick={props.onClick}>
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>{props.itemsInCart}</span>
    </button>
};

export default HeaderCartButton;