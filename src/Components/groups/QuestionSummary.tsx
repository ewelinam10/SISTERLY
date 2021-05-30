import React, {useState} from 'react';
import Avatar from '../../images/icons/avatar.svg'
import {Button, Card, FormText, Navbar} from 'react-bootstrap';
import Logo from "../../images/logo.svg";

const QuestionSummary = ({questions, answers}) => {

    const attrListMock = [
        "Płec",  "Kraj zamieszkania", "Przedział wiekowy", "Czas trwania spotkania", "Częstotliwość spotkań",
    ]

    const hashListMock = [
        "#samorozwoj",  "#feminizm", "#asertywnosc", "#praca",
    ]

    const [attrList, setAttrList] = useState(attrListMock);
    const [hashList, setHashList] = useState(hashListMock);
    const [hashtag, setHashtag] = useState('');

    const handleChangeHashtag = (e) => {
        setHashtag(e.target.value)
    }

    const addHashtag = () => {
        const hashtagArr = Array.from(hashtag);

        if(hashtagArr[0] !== '#'){
            hashtagArr.unshift('#');
        }
        setHashList([...hashList, hashtagArr.join('')]);
        setHashtag('');
    }

    const renderSummary = (index) => {
            return (
                <div>
                    <div className="font-weight-bold text-center">{questions[index]}</div>
                    <div>{answers[index]}</div>
                </div>
            )
    }



    return (
        <div>
            <div className="groups-question-card">
                <div>
                    <img className='groups-question-avatar' src={Avatar}/>
                </div>
                <div className="groups-question-question">Podsumowanie</div>
                {
                    questions.map((element,index) => (
                        renderSummary(index)
                    ))
                }
                <div className="font-weight-bold text-center">
                    W dobraniu jak najlepszych członków do kręgu może pomóc:
                </div>

                <div className="d-flex flex-wrap">
                    {attrList.map(attr => (
                        <div className='question-summary-attr'>{attr}</div>
                    ))}
                </div>

                <div className="font-weight-bold text-center mt-2">
                    Sugerowane hasztagi, wybierz z listy lub dodaj swój własny:
                </div>

                <div className=" d-flex flex-wrap">
                    {hashList.map(hash => (
                        <button disabled={true} className="question-summary-attr">{hash}</button>
                    ))}
                    <input value={hashtag} onChange={handleChangeHashtag} className="question-summary-attr" onKeyPress={event => {
                        if (event.key === 'Enter') {
                            addHashtag()
                        }
                    }}/>
                </div>
                <div className="mt-2 offset-4">
                    <Navbar.Brand href="/">
                        {/*informacja o zatwierdzeniu (np. modal)*/}
                        <button className="btn btn-success groups-question-btn-next">Zatwierdz</button>
                    </Navbar.Brand>
                </div>

            </div>
        </div>
    )
}

export default QuestionSummary;