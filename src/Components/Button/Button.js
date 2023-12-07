import './buttonstyle.css';

const Button = ({classes, onClick, text}) => {
    return (
        <>
            <button type="button"className={`button ${classes}`} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button;