import '../css/button.css';
function Button({ type, className, children }) {
    return <>
        <button className='button' type={type}>{children}</button>
    </>
}

export default Button;