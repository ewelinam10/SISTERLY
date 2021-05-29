import React, {useState} from 'react';


const QuestionSection = ({question, addAnswer}) => {

    const [answer, setAnswer] = useState('');

    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const clearAnswer = () => {
        setAnswer('');
    }

    return (
     <div>
         <div>
             {question}
             <input value={answer} onChange={handleChangeAnswer}/>
             <button onClick={() => {addAnswer(answer); clearAnswer()}}>Next question</button>
         </div>
     </div>
    )
}

export default QuestionSection;