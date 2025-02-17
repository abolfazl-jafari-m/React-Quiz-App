import RadioButton from "../Base/RadioButton/RadioButton.tsx";
import {QuestionInterface} from "../../Context/QuestionContext.tsx";
import {useContext, useMemo} from "react";
import {UserAnswerContext, UserAnswerInterface} from "../../Context/UserAnswerContext.tsx";


function Question({question ,current}: { question: QuestionInterface , current : number}) {
    const answers = [...question.incorrect_answers, question.correct_answer];
    const {setUserAnswer , userAnswer} = useContext(UserAnswerContext) as any;

    const shuffleAnswer = useMemo(()=>answers.sort(() => Math.random() - 0.5) , [question])

    return (
        <div className={"flex flex-col gap-14 p-3 "}>
            <div className={"bg-white rounded-lg shadow-lg  shadow-black px-10 py-5 w-full text-xl font-sans"}>
                {question?.question}
            </div>
            <div className={"grid grid-cols-2 gap-5 items-center"}>
                {
                    shuffleAnswer.map((item) => {
                        return <RadioButton key={item} label={item} id={item} value={item} name={"answer-" + question.question} checked={item === userAnswer[current]?.answer}
                                            onChange={() => {
                                                setUserAnswer((prev : UserAnswerInterface)  => ({...prev, [current] : {answer : item}}))
                                            }}/>
                    })
                }

            </div>
        </div>
    );
}

export default Question;