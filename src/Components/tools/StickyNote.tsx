import StickyNote from "../../images/sticky_note.jpg"
import {useState} from "react";

const StickyNotes = ({note, index}) => {

    const [noteOpend, setNoteOpend] = useState(false);

    const openNote = () => {

        setNoteOpend(!noteOpend);

        // const element : any = document.getElementById(`sticky-note-opened-${index}`).style.visibility = "visible";
        // element.style.visibility = true
    }

    return(

        <div>

            <div className="sticky-note-wrapper">

                <img className="sticky-note-image" src={StickyNote} onClick={openNote}/>
                <div className="sticky-note-name">{note.name}</div>
            </div>


            <div className="sticky-note-opend" id={`sticky-note-opened-${index}`} >

                <img className="sticky-note-image-opend" src={StickyNote} onClick={openNote}/>
                <div className="sticky-note-name-opend">{note.name}</div>
                <div className="sticky-note-name-opend">{note.description}</div>
            </div>
        </div>
    )
}


export default StickyNotes;