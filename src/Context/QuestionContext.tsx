import {createContext, useReducer} from "react";
import * as React from "react";

export interface QuestionInterface {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export type ActionType = {
    type : "SET_Questions",
    payload : QuestionInterface[]
}
const questionReducer = (state :QuestionInterface[] , action :ActionType)=>{
    switch (action.type){
        case "SET_Questions":
            return action.payload;
        default :
            return state;
    }
}


export const QuestionContext = createContext<{
     dispatchQuestions: React. ActionDispatch<[action: ActionType]>,
    questions: QuestionInterface[]
} | null>(null);


export function QuestionProvider({children}: { children: React.ReactNode }) {
    const [questions , dispatchQuestions] =useReducer(questionReducer , [])

    return (
        <QuestionContext value={{dispatchQuestions, questions}}>
            {children}
        </QuestionContext>
    )
}