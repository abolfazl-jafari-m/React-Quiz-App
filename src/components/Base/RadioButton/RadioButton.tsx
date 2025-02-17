
interface IProps {
    label : string,
    id: string ,
    value : string,
    name : string,
    onChange : ()=>void,
    variant ?: any
    checked ?: boolean,
    disabled ?: boolean
}
function RadioButton({label , id , value , name , onChange , variant = 'purple' ,checked ,disabled} : IProps) {
    const theme : any = {
        purple : "bg-purple-950 dark:bg-purple-600 rounded-md shadow-md shadow-black p-3 has-checked:bg-teal-700 has-checked:ring-2 has-checked:ring-green-950  dark:has-checked:ring-green-200",
        pink : "bg-pink-700 dark:bg-pink-400 rounded-md shadow-md shadow-black p-3 has-checked:bg-teal-700 has-checked:ring-2 has-checked:ring-green-950  dark:has-checked:ring-green-200",
        yellow : "bg-yellow-700 dark:bg-yellow-500  rounded-md shadow-md shadow-black p-3 has-checked:bg-teal-700 has-checked:ring-2 has-checked:ring-green-950  dark:has-checked:ring-green-200",
        gray : "bg-gray-700 dark:bg-gray-600 rounded-md shadow-md shadow-black p-3 has-checked:bg-teal-700 has-checked:ring-2 has-checked:ring-green-950  dark:has-checked:ring-green-200",
        rose : "bg-rose-800 dark:bg-rose-600 rounded-md shadow-md shadow-black p-3 has-checked:bg-teal-700 has-checked:ring-2 has-checked:ring-green-950  dark:has-checked:ring-green-200",
    }
    return (
        <div className={`relative ${theme[variant]}`}>
            <label htmlFor={id} className={"text-white"}>{label}</label>
            <input type={"radio"} value={value} name={name} id={id} className={"appearance-none absolute w-full h-full top-0 left-0 z-10 cursor-pointer"} onChange={onChange} checked={checked} disabled={disabled}/>
        </div>
    );
}

export default RadioButton;