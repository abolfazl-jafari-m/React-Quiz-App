import RadioButton from "../Base/RadioButton/RadioButton.tsx";
import {QuestionInterface} from "../../Context/QuestionContext.tsx";
import {useContext, useMemo} from "react";
import {UserAnswerAction, UserAnswerContext, UserAnswerInterface} from "../../Context/UserAnswerContext.tsx";
import * as React from "react";
import {motion} from "motion/react";



function Question({question ,current , reviewMode}: { question: QuestionInterface , current : number, reviewMode : string | boolean}) {
    const answers = [...question.incorrect_answers, question.correct_answer];
    const {dispatchUserAnswer , userAnswer} = useContext(UserAnswerContext) as {userAnswer: UserAnswerInterface; dispatchUserAnswer: React. ActionDispatch<[action: UserAnswerAction]>};

    const shuffleAnswer = useMemo(()=>answers.sort(() => Math.random() - 0.5) , [question])

    return (
        <motion.div layout={true}   className={"flex flex-col gap-14 max-sm:gap-5 p-3 "}>
            <div  className={"bg-white rounded-lg shadow-lg  shadow-black px-10 py-5 max-sm:px-5 max-sm:py-2 max-sm:text-[16px] w-full text-xl font-sans"}>
                {question?.question}
            </div>
            <div className={"grid grid-cols-2 gap-5 items-center max-sm:grid-cols-1 max-sm:gap-2"}>
                {
                    shuffleAnswer.map((item) => {
                        return<RadioButton label={item} key={item} id={item} value={item} name={"answer-" + question.question+current}
                                            checked={reviewMode ? item === question.correct_answer :  item === userAnswer[current]?.answer}
                                            disabled={!!reviewMode}
                                            variant={!!reviewMode && item === userAnswer[current]?.answer ? "rose" : 'purple'}
                                            onChange={() => {
                                                dispatchUserAnswer({type : "SET_UserAnswer" , payload : {...userAnswer, [current] : {answer : item}}})
                                            }}/>
                    })
                }

            </div>
        </motion.div>
    );
}

export default Question;