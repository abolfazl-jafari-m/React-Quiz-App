import {createContext, useState} from "react";
import * as React from "react";

export interface UserAnswerInterface {
    id : {
        answer : string
    }
}
export const UserAnswerContext = createContext<{
    userAnswer: UserAnswerInterface,
    setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswerInterface>>
} | null>(null);

export function UserAnswerContextProvider({children}: { children: React.ReactNode }) {
    const [userAnswer, setUserAnswer] = useState<UserAnswerInterface>({});

    return (
        <UserAnswerContext value={{userAnswer, setUserAnswer}}>
            {children}
        </UserAnswerContext>
    )
}