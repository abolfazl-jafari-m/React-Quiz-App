import Input from "../../components/Base/Input/Input.tsx";
import SelectBox from "../../components/Base/SelectBox/SelectBox.tsx";
import Button from "../../components/Base/Button/Button.tsx";
import {useNavigate} from "react-router";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";

interface CategoryInterface {
    id: string | number,
    name: string
}

interface ErrorInterface {
    count?: string,
    category?: string,
    difficulty?: string
}

interface FormDataInterface {
    qCount?: number | string,
    qDifficulty?: string,
    qCategory?: string
}

function Setup() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [errors, setErrors] = useState<ErrorInterface>({})
    const [formData, setFormData] = useState<FormDataInterface>({})

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/questions");
    }
    const validation = () => {
        const newError: ErrorInterface = {};
        if (Number(formData.qCount) < 5 || Number(formData.qCount) > 60) {
            newError.count = "Please Set a Valid Number";
        }
        if (formData.qDifficulty === "") {
            newError.difficulty = "Please Set a Level of Questions";
        }
        if (formData.qCategory === "") {
            newError.category = "Please Choose a Category";
        }
        setErrors(newError);
    }

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php").then(res => res.json()).then(result => setCategories(result.trivia_categories));
    }, [])
    useEffect(() => {
        validation();
    }, [formData]);
    return (
        <form className={"flex flex-col w-full items-center gap-3 relative"} onSubmit={handleForm}>
            <h2 className={"text-4xl dark:text-white"}>Setup Your Challenge</h2>
            <div className={"w-[700px] flex flex-col gap-5 items-center"}>
                <Input type={"number"}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData(prevState => ({
                           ...prevState,
                           qCount: e.target.value
                       }))}
                       value={formData.qCount}
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
                           options={[{name: "easy", id: 1}, {name: "medium", id: 2}, {name: "hard", id: 3}]}
                           name={"qDifficulty"}
                           placeholder={"Please Select a Level Of  Question"}/>
            </div>

            <Button type={"submit"} label={"Start"}
                    disabled={!!Object.keys(errors).length || Object.keys(formData).length < 3}
                    className={"transition ease-in duration-200 bg-rose-900 dark:bg-rose-600 text-white py-2 px-7 rounded-md shadow absolute right-0 bottom-0 cursor-pointer shadow-black disabled:bg-rose-200"}/>
        </form>
    );
}

export default Setup;