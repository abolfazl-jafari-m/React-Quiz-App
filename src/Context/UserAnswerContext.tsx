import {createContext, useState} from "react";
import * as React from "react";

export const UserAnswerContext = createContext(null);

export function UserAnswerContextProvider({children}: { children: React.ReactNode }) {
    const [userAnswer, setUserAnswer] = useState([]);

    return (
        <UserAnswerContext value={{userAnswer, setUserAnswer}}>
            {children}
        </UserAnswerContext>
    )
}