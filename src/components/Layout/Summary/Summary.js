import Card from "../../UI/Card/Card";
import Heading from "../Heading/Heading";
import './Summary.css';

const Summary = () => {
    return (
            <Card class='summary-card'>
                <Heading value='Delicious Food, Delivered To You.' class='summary-heading'/>
                <p className="summary"> Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br/><br/>All our meals are cooked with high quality ingredients, just-in-time and of cource by experianced chefs!</p>
            </Card>
    )
};

export default Summary;