import Logo from "../images/logo.svg"
import Avatar from "../images/icons/avatar.svg"
import {useEffect, useState} from "react";
import StickyNote from "../Components/tools/StickyNote";
import Camera from "../images/icons/videocam_off_black_24dp.svg";
import Mic from "../images/icons/mic_off_black_24dp.svg"
import Chat from "../images/icons/chat_black_24dp.svg"
import Draggable, {DraggableCore} from 'react-draggable';
import StickyNoteImg from "../images/sticky_note.jpg"
import PlusIcon from "../images/icons/plus-icon.svg"
import {Navbar} from "react-bootstrap";

const MyTools = () => {

    const stickyNotesMock = [
        {
            name: 'KASIA',
            description: 'Opis notatki 1 test dlugosci notatki',
        },
        {
            name: 'EWELINA',
            description: 'Opis notatki 2',
        },
        {
            name: 'MAGDA',
            description: 'Opis notatki 3',
        }
    ]

    const stickyNotesGroupMock = [
        {
            name: 'Notatka 1 test dlugiej nazwy',
        },
        {
            name: 'Notatka 2',
        },
        {
            name: 'Notatka 3',
        }
    ]


    const [myNotes, setMyNotes] = useState(stickyNotesMock)
    const [myNotesGroup, setMyNotesGroup] = useState(stickyNotesGroupMock)
    const [counter, setCounter] = useState(3600)
    const [formatedCounter, setFormatedCounter] = useState("")
    const [messageInput, setMessageInput] = useState('')

    const formatSeconds = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - 3600 * hours) / 60);//(time / 60)
        let seconds = time - 60 * minutes - 3600 * hours;

        let strHours: string = '';
        let strMinutes: string = '';
        let strSeconds: string = '';
        hours < 10 ? strHours = "0" + hours.toString() : strHours = hours.toString()
        minutes < 10 ? strMinutes = "0" + minutes : strMinutes = minutes.toString()
        seconds < 10 ? strSeconds = "0" + seconds : strSeconds = seconds.toString()

        return strHours + "h " + strMinutes + "m " + strSeconds + "s"
    }


    const addMyNote = () => {

        const nextNote = {
            name: `Notatka ${myNotes.length + 1}`,
            description: ''
        }
        setMyNotes([...myNotes, nextNote])
    }

    const addMyNoteGroup = () => {
        const nextNote = {
            name: `Notatka ${myNotesGroup.length + 1}`,
        }
        setMyNotesGroup([...myNotesGroup, nextNote])
    }

    const handleChangeMessage = (e) => {
        setMessageInput(e.target.value)
    }

    useEffect(() => {


        const timer = setTimeout(() => {
            setCounter(counter - 1)
            setFormatedCounter(formatSeconds(counter))
        }, 1000)

        return () => clearTimeout(timer)
    }, [counter])

    return (

        <div className="my-tools-body">

            <div className="my-panel my-tools-sticky-note-section">
               TODO lista kręgu:

                <div className="d-flex">
                    {myNotes.map((note, index) => (
                        <StickyNote note={note} index={index}/>
                    ))}

                    <img className="my-tools-plus-icon pull-right" onClick={addMyNote} src={PlusIcon} />
                </div>
            </div>

            <div className="mt-2 p-0 d-flex mr-2">

                <div className="mr-2 p-0 col-md-8">
                    <div className="my-panel">
                        <div className="col-md-1 d-flex text-left">
                            <img className="my-tools-icon" src={Camera}/>
                            <img className="my-tools-icon" src={Mic}/>
                        </div>
                        <div className="my-tools-meeting-header">
                            Twoje najbliższe spotkanie rozpocznie sie za:
                        </div>
                        <div className="my-tools-contdown">
                            {formatedCounter}
                        </div>
                    </div>

                    <div className="mt-1 my-panel my-tools-message-wrapper">

                        <input onChange={handleChangeMessage} className="my-tools-message-input" placeholder="Twoja wiadomosc.." value={messageInput}/>
                        <img className="ml-2" src={Chat} onClick={() => setMessageInput('')}></img>
                    </div>
                </div>


                <div className="m-0 my-panel col-md-4" id="draggable-wrapper">
                    Wasze notatki ze spotkania:


                    {myNotesGroup.map((note, index) => (
                        <Draggable bounds="#draggable-wrapper">
                            <img className="my-tools-sticky-note-draggable" src={StickyNoteImg}/>
                        </Draggable>
                    ))}

                    <img className="my-tools-plus-icon pull-right" onClick={addMyNoteGroup} src={PlusIcon} />
                </div>
            </div>
        </div>
    )
}

export default MyTools;