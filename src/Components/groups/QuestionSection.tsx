import React, {useState} from 'react';
import Avatar from '../../images/icons/avatar.svg'
import { Button, Card, FormText } from 'react-bootstrap';

const QuestionSection = ({question, addAnswer, index, questionCount}) => {

    const [answer, setAnswer] = useState('');

    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const clearAnswer = () => {
        setAnswer('');
    }

    return (
     <div>
         <div className="groups-question-card">
             <div>
                 <img className='groups-question-avatar' src={Avatar}/>
             </div>
             <div className="groups-question-question">Krok {index} z {questionCount}</div>
             <div className="groups-question-question">{question}</div>
             <textarea className="form-control" value={answer} onChange={handleChangeAnswer}/>
             <div className="mt-2 buttonWrapper">
                 <Button className="groups-question-btn-prev" onClick={() => {addAnswer(answer); clearAnswer()}}>Poprzednie</Button>
                 <Button className="groups-question-btn-next offset-6" onClick={() => {addAnswer(answer); clearAnswer()}}>Następne</Button>
             </div>
         </div>
     </div>
    )
}

export default QuestionSection;