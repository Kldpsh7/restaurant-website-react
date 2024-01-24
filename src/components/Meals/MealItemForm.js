import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './MealItemForm.css'

const MealItemFrom = (props) => {
    return <form className="meal-item-form">
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