interface IProps {
    label : string,
    className : string,
    onClick ?: ()=>void,
    type ?: "submit" | "reset" | "button" | undefined,
    disabled  ?: boolean
}
function Button({label , className , onClick , type = "button" ,disabled =false} :IProps) {
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}> {label}</button>
    );
}

export default Button;