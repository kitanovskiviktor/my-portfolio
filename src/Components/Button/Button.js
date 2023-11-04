import './buttonstyle.css';

const Button = ({classes, onClick, text}) => {
    return (
        <>
            <button type="button" className='button' onClick={onClick}>{text}</button>
        </>
    )
}

export default Button;