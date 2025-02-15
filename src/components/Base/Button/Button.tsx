interface IProps {
    label : string,
    className : string,
    onClick ?: ()=>void,
}
function Button({label , className , onClick} :IProps) {
    return (
        <button className={className} onClick={onClick}> {label}</button>
    );
}

export default Button;