import './Meal.css'

const Meal = (props) => {
    return <div className='meal-div'>
        <span className="meal-name">{props.meal.name}</span>
        <span className="meal-description">{props.meal.description}</span>
        <span className="meal-price">₹{props.meal.price}</span>
        <hr/>
    </div>
}

export default Meal;