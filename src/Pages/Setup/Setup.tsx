import Input from "../../components/Base/Input/Input.tsx";
import SelectBox from "../../components/Base/SelectBox/SelectBox.tsx";
import Button from "../../components/Base/Button/Button.tsx";
import {useNavigate} from "react-router";


function Setup() {
    const navigate = useNavigate();
    const handlerStart = ()=>{
        navigate("/questions?number=1")
    }
    return (
        <div className={"flex flex-col w-full items-center gap-3 relative"}>
            <h2 className={"text-4xl dark:text-white"}>Setup Your Challenge</h2>
            <div className={"w-[700px] flex flex-col gap-5 items-center"}>
                <Input type={"number"}
                       className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black placeholder:text-gray-700 dark:placeholder:text-black"}
                       onChange={() => {
                       }} placeholder={"Please Enter Number Between 5 to 60 "} name={"qCount"} id={"qCount"} value={""}
                       label={"Number Of Question"} error={"error"}/>
                <SelectBox label={"Category"} error={"error"}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qCategory"} value={""} onChange={() => {
                }} options={["1", "2", "3"]} name={"qCategory"} placeholder={"Please Select a Category"}/>
                <SelectBox label={"Difficulty"} error={"error"}
                           className={"transition ease-in duration-200 bg-zinc-400 p-3 rounded-md shadow-lg shadow-gray-800 outline-none border-none dark:bg-white dark:shadow-black dark:text-black text-gray-700"}
                           id={"qDifficulty"} value={""} onChange={() => {
                }} options={["1", "2", "3"]} name={"qDifficulty"} placeholder={"Please Select a Level Of Question"}/>
            </div>

            <Button label={"Start"}
                    onClick={handlerStart}
                    className={"transition ease-in duration-200 bg-rose-900 dark:bg-rose-600 text-white py-2 px-7 rounded-md shadow absolute right-0 bottom-0 cursor-pointer shadow-black "}/>
        </div>
    );
}

export default Setup;