import './MealItem.css'
import MealItemFrom from './MealItemForm';

const MealItem = (props) => {
    return <>
        <li className='meal-div'>
            <div className='meal-info-div'>
                <span className="meal-name">{props.meal.name}</span>
                <span className="meal-description">{props.meal.description}</span>
                <span className="meal-price">₹{props.meal.price.toFixed(2)}</span>
            </div>
            <div>
                <MealItemFrom id={props.meal.id} item={props.meal}/>
            </div>
        </li>
        <hr/>
    </>
}

export default MealItem;