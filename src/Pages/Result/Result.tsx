import {useContext, useMemo, useState} from "react";
import {QuestionContext, QuestionInterface} from "../../Context/QuestionContext.tsx";
import {UserAnswerContext} from "../../Context/UserAnswerContext.tsx";
import Button from "../../components/Base/Button/Button.tsx";
import {BsEmojiFrownFill, BsFillEmojiSunglassesFill} from "react-icons/bs";
import {useNavigate} from "react-router";

function Result() {
    const navigate = useNavigate();
    const [showResult, setShowResult] = useState<boolean>(false);
    const {questions} = useContext(QuestionContext) as any;
    const {userAnswer} = useContext(UserAnswerContext) as any;
    const correctAnswer = questions.map((item: QuestionInterface) => item.correct_answer);
    const calculateResults = () => {
        let point: number = 0
        for (const answer in userAnswer) {
            if (userAnswer[answer].answer === correctAnswer[answer]) {
                point++;
            }
        }
        return point
    }
    const result = useMemo(calculateResults, []);


    return (
        <>
            <div className={"flex flex-col gap-5 items-center justify-center p-10 dark:text-white relative"}>
                <h3 className={"text-4xl font-bold tracking-tight"}>Congratulations , You Finish The Quiz</h3>
                <p>If You Ready For Result Press The Button Blow</p>
                <Button label={"Result"}
                        onClick={() => setShowResult(true)}
                        className={"py-1 px-8 rounded-md shadow shadow-black bg-emerald-800 text-white/80 cursor-pointer text-lg dark:bg-emerald-500 dark:shadow-lg"}/>
                {
                    showResult &&
                    (<div className={"flex flex-col gap-3 items-center"}>
                        <p>
                            You Answer {result} of {questions.length} Correctly
                        </p>
                        {questions.length / result * 100 > 50
                            ?
                            <BsFillEmojiSunglassesFill size={"48px"}
                                                       className={"text-yellow-800 dark:text-yellow-500"}/>
                            :
                            <BsEmojiFrownFill size={"48px"} className={"text-yellow-800 dark:text-yellow-500"}/>

                        }
                    </div>)
                }

            </div>
            <Button label={"Start Over"}
                    className={"bg-rose-900 text-white rounded-md shadow shadow-black py-1 px-6 absolute bottom-10 right-10 cursor-pointer"} onClick={()=>navigate("/setup")}/>
        </>

    );
}

export default Result;