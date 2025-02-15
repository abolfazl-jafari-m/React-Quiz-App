interface IProps {
    type : string,
     className : string ,
     onChange : ()=>void,
    placeholder : string,
    name : string,
    id :string,
    value : string,
    label : string,
    error : string
}
function Input({type , className , onChange , placeholder , name, id , value , label  ,error}:IProps) {
    return (
        <div className={"flex flex-col w-full  gap-3.5 dark:text-white"}>
            <label htmlFor={id}>{label}</label>
            <input type={type} className={className} onChange={onChange} placeholder={placeholder} name={name} id={id} value={value}/>
            <span className={"text-xs text-red-600"}>{error}</span>
        </div>
    );
}

export default Input;