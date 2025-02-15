import Question from "../../components/Question/Question.tsx";
import Button from "../../components/Base/Button/Button.tsx";

function Questions() {
    return (
            <div className={"flex items-start justify-center p-2 w-full relative h-2/3"}>
                <Question />

                <div className={"absolute bottom-0 right-0 flex items-center"}>
                    <Button label={"<"} className={"dark:bg-[#FEEACF] bg-[#dda15e] text-black font-bold text-xl px-3 py-1 hover:bg-black  cursor-pointer hover:text-white transition ease-in duration-200 rounded-l-lg"}/>
                    <Button label={">"} className={"dark:bg-[#FEEACF] bg-[#dda15e] text-black font-bold text-xl px-3 py-1 hover:bg-black  cursor-pointer hover:text-white transition ease-in duration-200 rounded-r-lg"}/>
                </div>

            </div>

    );
}

export default Questions;