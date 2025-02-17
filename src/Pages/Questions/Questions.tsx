import Question from "../../components/Question/Question.tsx";
import Button from "../../components/Base/Button/Button.tsx";
import {useContext, useState} from "react";
import {QuestionContext, QuestionInterface} from "../../Context/QuestionContext.tsx";
import {useNavigate, useSearchParams} from "react-router";



function Questions() {
    const [queryParams] = useSearchParams();
    const reviewMode = queryParams.get("reivewMode");

    console.log(reviewMode)




    const [current, setCurrent] = useState<number>(0);
    const navigate = useNavigate();

    const {questions} = useContext(QuestionContext) as {questions : QuestionInterface[]};
    // const  questions = JSON.parse(localStorage.getItem("questions") ?? "");

    const next = () => {
        if (questions.length - 1 > current) {
            setCurrent(current + 1);
        }
    }
    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    }
    return (
        <div className={"flex items-start justify-center p-2 w-full relative h-full"}>
            <Question question={questions[current]} current={current} reviewMode={reviewMode ?? false}/>

            <div className={"absolute bottom-0 right-0 flex items-center"}>
                <Button label={"<"}
                        onClick={prev}
                        className={"dark:bg-[#FEEACF] bg-[#dda15e] text-black font-bold text-xl px-3 py-1 hover:bg-black  cursor-pointer hover:text-white transition ease-in duration-200 rounded-l-lg"}/>
                {
                    questions.length - 1 === current
                        ?
                        <Button label={reviewMode ? "back To Result" : "Attempt To Finish"}
                                className={"dark:bg-[#FEEACF] bg-[#dda15e] text-black font-bold text-xl px-3 py-1 hover:bg-black  cursor-pointer hover:text-white transition ease-in duration-200 rounded-r-lg"}
                                onClick={() => {
                                    navigate("/result")
                                }}/>
                        :
                        <Button label={">"}
                                className={"dark:bg-[#FEEACF] bg-[#dda15e] text-black font-bold text-xl px-3 py-1 hover:bg-black  cursor-pointer hover:text-white transition ease-in duration-200 rounded-r-lg"}
                                onClick={next}
                        />
                }
            </div>

        </div>

    );
}

export default Questions;