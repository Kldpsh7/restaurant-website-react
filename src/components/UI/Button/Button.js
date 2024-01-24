import './Button.css';

const Button = (props) => {
    return <button type={props.type} className={`button ${props.class?props.class:''}`}>{props.value}</button>
};

export default Button;