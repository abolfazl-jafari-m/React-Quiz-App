import Input from "../../components/Base/Input/Input.tsx";
import SelectBox from "../../components/Base/SelectBox/SelectBox.tsx";
import Button from "../../components/Base/Button/Button.tsx";
import {useNavigate} from "react-router";
import {useEffect, useRef, useState} from "react";

interface CategoryInterface {
    id: string | number,
    name: string
}

interface ErrorInterface {
    number: string,
    category: string,
    difficulty: string
}

function Setup() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [errors, setErrors] = useState<ErrorInterface>({
        number: "",
        category: "",
        difficulty: ""
    })
    const categoryRef = useRef<HTMLSelectElement | null>(null);
    const difficultyRef = useRef<HTMLSelectElement | null>(null);
    const numberRef = useRef<HTMLInputElement | null>(null);
    const handlerStart = () => {
        validation();
    }
    const validation = () => {
        if (numberRef.current && categoryRef.current && difficultyRef.current) {
            if (Number(numberRef.current.value) < 5 || Number(numberRef.current.value) > 60) {
                setErrors(prevState => {
                    return {...prevState, number: "Please Enter The Valid Number"}
                })
            } else {
                setErrors(prevState => {
                    return {...prevState, number: ""}
                })
            }
            if (difficultyRef.current.value === "") {
                setErrors(prevState => {
                    return {...prevState, difficulty: "Please Choose a Level"}
                })
            } else {
                setErrors(prevState => {
                    return {...prevState, difficulty: ""}
                })
            }
            if (categoryRef.current.value === "") {
                setErrors(prevState => {
                    return {...prevState, category: "Please Choose a Cateogry"}
                })
            } else {
                setErrors(prevState => {
                    return {...prevState, category: ""}
                })
            }
        }
    }

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php").then(res => res.json()).then(result => setCategories(result.trivia_categories));
    }, [])
    return (
        <form className={"flex flex-col w-full items-center gap-3 relative"}>
            <h2 className={"text-4xl dark:text-white"}>Setup Your Challenge</h2>
            <div className={"w-[700px] flex flex-col gap-5 items-center"}>
                <Input ref={numberRef} type={"number"}
                       className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black placeholder:text-gray-700 dark:placeholder:text-black"}
                       placeholder={"Please Enter Number Between 5 to 60 "} name={"qCount"} id={"qCount"}
                       label={"Number Of Question"} error={errors.number}/>
                <SelectBox ref={categoryRef} label={"Category"} error={errors.category}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qCategory"}
                           options={categories.map(item => item.name)} name={"qCategory"}
                           placeholder={"Please Select a Category"}/>
                <SelectBox ref={difficultyRef} label={"Difficulty"} error={errors.difficulty}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qDifficulty"} options={["easy", "medium", "hard"]} name={"qDifficulty"}
                           placeholder={"Please Select a Level Of Question"}/>
            </div>

            <Button label={"Start"}
                    onClick={handlerStart}
                    className={"transition ease-in duration-200 bg-rose-900 dark:bg-rose-600 text-white py-2 px-7 rounded-md shadow absolute right-0 bottom-0 cursor-pointer shadow-black "}/>
        </form>
    );
}

export default Setup;