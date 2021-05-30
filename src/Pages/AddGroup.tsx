import React, { useState } from 'react';
import QuestionSection from "../Components/groups/QuestionSection";
import QuestionSummary from "../Components/groups/QuestionSummary";

const AddGroup = () => {

    const [questionCounter, setQuestionCounter] = useState(0);
    const [answerList, setAnswerList] = useState<string[]>([]);


    const addAnswer = (answer) => {


        // @ts-ignore
        document.getElementsByClassName('groups-question-card')[0].style.animation = "mymove 1s ease-in-out";

        setTimeout(() => {
            setQuestionCounter(questionCounter + 1);
            setAnswerList([...answerList, answer]);

            // @ts-ignore
            document.getElementsByClassName('groups-question-card')[0].style.animation = "";
        }, 1000)

    }

    const questionList = [
        "Twój cel lub temat",
        "Jakich osób szukasz w kręgu",
        "Czego chcesz się nauczyć lub doświadczyć w kręgu",
        "Co wniesiesz do kręgu w tym temacie (wiedza/doświadczenie)",
    ]


    const showQuestion = () => {
        if (questionCounter === questionList.length) {
            return (<QuestionSummary answers={answerList} questions={questionList}/>)
            ///wyswietl podsumowanie formularza czy cos takiego
        } else {
            return <QuestionSection question={questionList[questionCounter]} addAnswer={addAnswer} index={questionCounter+1} questionCount={questionList.length}/>
        }
    }

    return (
        <div>
            <div>
            {showQuestion()}
            </div>
        </div>

    )

}

export default AddGroup;