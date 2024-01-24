import { useContext } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './MealItemForm.css'
import CartContext from "../../store/cart-context";

const MealItemFrom = (props) => {

    const cartCtx = useContext(CartContext);

    const addToCart = (e)=>{
        e.preventDefault();
        cartCtx.addItem(props.item);    
    }

    return <form className="meal-item-form" onSubmit={addToCart}>
        <Input label='Qty.' input={{
            type:'number',
            id: props.id,
            min:'1',
            max:'5',
            defaultValue:'1',
            step:'1'
        }}/>
        <Button type='submit' value='+ Add' class='add-item-button'/>
    </form>
};

export default MealItemFrom;