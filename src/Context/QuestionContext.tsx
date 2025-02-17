import {createContext, useState} from "react";
import * as React from "react";

export interface QuestionInterface {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}


export const QuestionContext = createContext<{
    setQuestions: React.Dispatch<React.SetStateAction<QuestionInterface[]>>,
    questions: QuestionInterface[]
} | null>(null);



export function QuestionProvider({children}: { children: React.ReactNode }) {
    const [questions, setQuestions] = useState<QuestionInterface[]>([]);

    return (
        <QuestionContext value={{setQuestions, questions}}>
            {children}
        </QuestionContext>
    )
}