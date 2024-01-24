import Card from "../UI/Card/Card";
import Meal from "./Meal";

const dummyMeals = [
    {
        id:'m1',
        name:'Noodles',
        description:'Finest Noodles with veggies',
        price:'180.00'
    },
    {
        id:'m2',
        name:'Pasta',
        description:'Italian pasta with white sauce and corn',
        price:'230.00'
    },
    {
        id:'m3',
        name:'Cheese Burger',
        description:'Fresh veggie burger with finest cheese',
        price:'80.00'
    },
    {
        id:'m4',
        name:'Grilled Sandwich',
        description:'Brown bread, fresh cheese and green veggies',
        price:'150.00'
    }
]

const MealList = () => {
    return (
    <Card class='meal-list'>
        <div>
            {dummyMeals.map(meal=><Meal meal={meal} key={meal.id}/>)}
        </div>
    </Card>
    )
};

export default MealList;