import {useContext, useState} from "react";
import {QuestionContext} from "../../Context/QuestionContext.tsx";
import {UserAnswerContext} from "../../Context/UserAnswerContext.tsx";
import Button from "../../components/Base/Button/Button.tsx";

function Result() {
    const [point, setPoint] = useState(0);
    const {questions} =  useContext(QuestionContext)as any;
    const {userAnswer} = useContext(UserAnswerContext) as  any;
    const correctAnswer = questions.map(item=> item.correct_answer);
    const calculateResults = ()=>{
        setPoint(0);
        for (const answer in userAnswer) {
            if (userAnswer[answer].answer ===  correctAnswer[answer]){
                setPoint(point + 1);
            }
        }
    }
    return (
        <div>
            <Button label={"see"} className={"bg-red-50"} onClick={calculateResults}/>
            <br/>
            <div>{`${point} of ${questions.length}`}</div>

        </div>
    );
}

export default Result;