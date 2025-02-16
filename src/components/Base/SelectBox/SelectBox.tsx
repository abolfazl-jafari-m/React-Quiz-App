import {ChangeEvent, Ref} from "react";

interface IProps {
    label: string,
    error: string,
    className: string,
    id: string,
    value ?: string,
    onChange ?: (e :ChangeEvent<HTMLSelectElement>) => void,
    options: string[],
    name: string,
    placeholder: string,
    ref ?: Ref<HTMLSelectElement>

}

function SelectBox({label, error, className, id, value, onChange, options, name, placeholder ,ref}: IProps) {
    return (
        <div className={"flex flex-col w-full gap-3.5"}>
            <label htmlFor={id} className={"dark:text-white"}>
                {label}
            </label>
            <select className={className} defaultValue={""} value={value} name={name} onChange={onChange} ref={ref}>
                <option value={""}>{placeholder}</option>
                {
                    options.map((item) => <option key={item} value={item} className={"capitalize"}>{item}</option>)
                }
            </select>
            <span className={"text-sm dark:text-red-200 text-red-600 h-3"}>{error}</span>
        </div>

    );
}

export default SelectBox;