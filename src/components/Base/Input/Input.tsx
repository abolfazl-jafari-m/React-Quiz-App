import {Ref} from "react";

interface IProps {
    type : string,
     className : string ,
     onChange ?: ()=>void,
    placeholder : string,
    name : string,
    id :string,
    value ?: string,
    label : string,
    error : string,
    ref ?: Ref<HTMLInputElement>

}
function Input({type , className , onChange , placeholder , name, id , value , label  ,error , ref}:IProps) {
    return (
        <div className={"flex flex-col w-full  gap-3.5 dark:text-white"}>
            <label htmlFor={id}>{label}</label>
            <input type={type} className={className} onChange={onChange} defaultValue={""} placeholder={placeholder} name={name} id={id} value={value} ref={ref}/>
            <span className={"text-sm dark:text-red-200 text-red-600 h-3"}>{error}</span>
        </div>
    );
}

export default Input;