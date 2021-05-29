import Home from "../images/icons/home_black_24dp-1.svg"
import Avatar from "../images/icons/avatar.svg"
import {useState} from "react";
import StickyNote from "../components/tools/StickyNote";

const MyTools = () => {

    const stickyNotesMock = [
        {
            name: 'Notatka 1 test dlugiej nazwy notatki',
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

    return (

        <div>
            <nav className="col-md-11 mt-3 d-flex">
                <div className="col-md-6 text-left">
                    <img src={Home} style={{width: "50px", height: "50px"}}/>
                </div>
                <div className="col-md-6 text-right offset-md-1">
                    <img className="my-tools-avatar" src={Avatar}/>
                </div>
            </nav>

            <section className="my-panel my-tools-sticky-note-section">
                Twoja prywatna lista TODO:

                <div className="d-flex">
                    {myNotes.map((note, index) => (
                        <StickyNote note={note} index={index}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default MyTools;