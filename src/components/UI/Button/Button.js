import './Button.css';

const Button = (props) => {
    return <button type={props.type} className={`button ${props.class?props.class:''}`} onClick={props.onClick && props.onClick}>{props.value}</button>
};

export default Button;