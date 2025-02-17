import {createContext, useReducer} from "react";
import * as React from "react";

export interface UserAnswerInterface {
    [id : number] : {
        answer : string
    }
}

export type UserAnswerAction = {
    type : "SET_UserAnswer",
    payload : UserAnswerInterface
}

const userAnswerReducer = (state : UserAnswerInterface , action :UserAnswerAction)=>{
    switch (action.type){
        case "SET_UserAnswer":
            return action.payload;
        default:
            return state;
    }
}

export const UserAnswerContext = createContext<{userAnswer: UserAnswerInterface; dispatchUserAnswer: React. ActionDispatch<[action: UserAnswerAction]>; } | null>(null);

export function UserAnswerContextProvider({children}: { children: React.ReactNode }) {
    // const [userAnswer, setUserAnswer] = useState<UserAnswerInterface>({});
    const [userAnswer , dispatchUserAnswer] = useReducer(userAnswerReducer, {});

    return (
        <UserAnswerContext value={{userAnswer, dispatchUserAnswer}}>
            {children}
        </UserAnswerContext>
    )
}