import Input from "../Base/Input/Input.tsx";
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from "react";
import SelectBox from "../Base/SelectBox/SelectBox.tsx";
import Button from "../Base/Button/Button.tsx";
import {CategoryInterface, ErrorInterface, FormDataInterface} from "../../Pages/Setup/Setup.tsx";

interface IProps {
    handleForm : (e :FormEvent<HTMLFormElement>)=>void,
    categories : CategoryInterface[],
    errors :ErrorInterface,
    formData : FormDataInterface,
    setFormData : Dispatch<SetStateAction<FormDataInterface>>,
    levels : {name :string ,id : number}[]
}

function Form({handleForm , categories , errors , formData ,setFormData , levels } : IProps) {
    return (
        <form className={"flex flex-col w-full items-center gap-3 max-sm:gap-1.5 relative max-sm:text-sm h-full  lg:justify-between"}
              onSubmit={handleForm}>
            <h2 className={"text-4xl dark:text-white max-lg:text-2xl max-md:text-[20px] max-sm:mb-2"}>Setup Your
                Challenge</h2>
            <div
                className={"w-[700px] flex flex-col gap-5 items-center max-lg:grid max-lg:grid-cols-2 max-md:w-[500px] max-sm:grid-cols-1 max-sm:gap-1.5 max-sm:w-[300px]"}>
                <Input type={"number"}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData(prevState => ({
                           ...prevState,
                           qCount: e.target.value
                       }))}
                       value={formData.qCount ?? ""}
                       className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black placeholder:text-gray-700 dark:placeholder:text-black"}
                       placeholder={"Please Enter Number Between 5 to 60 "} name={"qCount"} id={"qCount"}
                       label={"Number Of Question"} error={errors.count}/>
                <SelectBox label={"Category"} error={errors.category}
                           onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData(prevState => ({
                               ...prevState,
                               qCategory: e.target.value
                           }))}
                           value={formData.qCategory}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qCategory"}
                           options={categories} name={"qCategory"}
                           placeholder={"Please Select a Category"}/>
                <SelectBox label={"Difficulty"} error={errors.difficulty}
                           onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData(prevState => ({
                               ...prevState,
                               qDifficulty: e.target.value
                           }))}
                           value={formData.qDifficulty}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qDifficulty"}
                           options={levels}
                           name={"qDifficulty"}
                           placeholder={"Please Select a Level Of  Question"}/>
            </div>

            <Button type={"submit"} label={"Start"}
                    disabled={!!Object.keys(errors).length || Object.keys(formData).length < 3}
                    className={"transition ease-in duration-200 bg-rose-900 dark:bg-rose-600 text-white py-2 px-7 rounded-md shadow absolute max-sm:static right-0 bottom-0 cursor-pointer shadow-black disabled:bg-rose-800/50 disabled:text-black/50"}/>
        </form>
    );
}

export default Form;