import {useNavigate} from "react-router";
import {FormEvent, useContext, useEffect, useState} from "react";
import {getQuestions} from "../../Services/Questions.ts";
import {ActionType, QuestionContext} from "../../Context/QuestionContext.tsx";
import Loading from "../../components/Loading/Loading.tsx";
import * as React from "react";
import {getCategories} from "../../Services/Categories.ts";
import Form from "../../components/Form/Form.tsx";

export interface CategoryInterface {
    id: string | number,
    name: string
}

export interface ErrorInterface {
    count?: string,
    category?: string,
    difficulty?: string
}

export interface FormDataInterface {
    qCount?: number | string,
    qDifficulty?: string,
    qCategory?: string
}

function Setup() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [errors, setErrors] = useState<ErrorInterface>({})
    const [formData, setFormData] = useState<FormDataInterface>({})
    const levels = [{name: "easy", id: 1}, {name: "medium", id: 2}, {name: "hard", id: 3}];

    const {dispatchQuestions} = useContext(QuestionContext) as {
        dispatchQuestions: React.ActionDispatch<[action: ActionType]>
    };

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const category = categories.find(item => item.id === Number(formData.qCategory))?.id;
        const difficulty = levels.find(item => item.id === Number(formData.qDifficulty))?.name;
        const count = Number(formData.qCount);
        if (formData.qCount && formData.qCategory && formData.qDifficulty) {
            getQuestions(count, category as number, difficulty as string)
                .then(res => {
                    dispatchQuestions({type: "SET_Questions", payload: res});
                    navigate("/questions");
                }).finally(() => setIsLoading(false));
        }
    }

    const validation = () => {
        const newError: ErrorInterface = {};
        if (Number(formData.qCount) < 5 || Number(formData.qCount) > 60) {
            newError.count = "Please Set a Number between 5 to 60";
        }
        if (formData.qDifficulty === "") {
            newError.difficulty = "Please Set a Level of Questions";
        }
        if (formData.qCategory === "") {
            newError.category = "Please Choose a Category";
        }
        setErrors(newError);
    }

    useEffect(() => {
        getCategories().then(result => setCategories(result.trivia_categories));
    }, [])

    useEffect(() => {
        validation();
    }, [formData]);


    return (
        <>
            <Form handleForm={handleForm} categories={categories} errors={errors} formData={formData}
                  setFormData={setFormData} levels={levels}/>
            {
                isLoading && <Loading/>
            }
        </>

    );
}

export default Setup;