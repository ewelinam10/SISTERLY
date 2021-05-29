import React, { useState } from 'react';
import QuestionSection from "../components/groups/QuestionSection";

const AddGroup = () => {

    const [questionCounter, setQuestionCounter] = useState(0);
    const [answerList, setAnswerList] = useState<string[]>([]);


    const addAnswer = (answer) => {
        setQuestionCounter(questionCounter + 1);
        setAnswerList([...answerList, answer]);
    }

    const questionList = [
        "Pytanie 1", "Pytanie 2", "Pytanie 3"
    ]


    const showQuestion = () => {
        if (questionCounter === questionList.length) {
            return (
                answerList.map(answer => (
                    <h1>{answer}</h1>
                ))
            )
            ///wyswietl podsumowanie formularza czy cos takiego
        } else {
            return <QuestionSection question={questionList[questionCounter]} addAnswer={addAnswer} />
        }
    }

    return (
        <div>
            {showQuestion()}

        </div>

    )

}

export default AddGroup;