import Logo from "../images/logo.svg"
import Avatar from "../images/icons/avatar.svg"
import {useEffect, useState} from "react";
import StickyNote from "../Components/tools/StickyNote";
import Camera from "../images/icons/videocam_off_black_24dp.svg";
import Mic from "../images/icons/mic_off_black_24dp.svg"

const MyTools = () => {

    const stickyNotesMock = [
        {
            name: 'Notatka 1 test dlugiej nazwy',
            description: 'Opis notatki 1 test dlugosci notatki',
        },
        {
            name: 'Notatka 2',
            description: 'Opis notatki 2',
        },
        {
            name: 'Notatka 3',
            description: 'Opis notatki 3',
        }
    ]

    const [myNotes, setMyNotes] = useState(stickyNotesMock)
    const [counter, setCounter] = useState(3600)
    const [formatedCounter, setFormatedCounter] = useState("")

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

    useEffect(() => {


        const timer = setTimeout(() => {
            setCounter(counter - 1)
            setFormatedCounter(formatSeconds(counter))
        }, 1000)

        return () => clearTimeout(timer)
    }, [counter])

    return (

        <div>
            <nav className="col-md-11 d-flex">
                <div className="col-md-6 text-left">
                    <img src={Logo} className="my-tools-logo"/>
                </div>
                <div className="col-md-6 text-right offset-md-1">
                    <img className="my-tools-avatar" src={Avatar}/>
                </div>
            </nav>

            <div className="my-panel my-tools-sticky-note-section">
                Twoja prywatna lista TODO:

                <div className="d-flex">
                    {myNotes.map((note, index) => (
                        <StickyNote note={note} index={index}/>
                    ))}
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

                    <div className="mt-1 my-panel">

                    </div>
                </div>


                <div className="m-0 my-panel col-md-4">
                    Wasze notatki ze spotkania:
                </div>
            </div>
        </div>
    )
}

export default MyTools;