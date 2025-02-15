interface IProps {
    label: string,
    error: string,
    className: string,
    id: string,
    value: string,
    onChange: () => void,
    options: string[],
    name: string,
    placeholder: string

}

function SelectBox({label, error, className, id, value, onChange, options, name, placeholder}: IProps) {
    return (
        <div className={"flex flex-col w-full gap-3.5"}>
            <label htmlFor={id} className={"dark:text-white"}>
                {label}
            </label>
            <select className={className} value={value} name={name} onChange={onChange}>
                <option>{placeholder}</option>
                {
                    options.map((item) => <option>{item}</option>)
                }
            </select>
            <span className={"text-xs text-red-600"}>{error}</span>
        </div>

    );
}

export default SelectBox;