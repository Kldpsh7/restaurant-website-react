import Button from "../UI/Button/Button";
import './MealItemForm.css'

const MealItemFrom = (props) => {
    return <form className="meal-item-form">
        <label>Qty.</label>
        <input type="number"/>
        <Button type='submit' value='+Add' class='add-item-button'>Add</Button>
    </form>
};

export default MealItemFrom;