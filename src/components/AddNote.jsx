import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function AddNote(props) {

  //Connect to firebase version - tomorrow

  //Set State
  const [startNote, setStartNote ] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: ''
  });


//Update Value
  function updateValue(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

//Set Note
  function clickNote() {
    setStartNote(true);
  }

//Create Note
  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  //Update Note
// Update note code

  return (
    <div>
      <form className="create-note">
      {startNote && <input name="title" placeholder="Title" value={note.title} onChange={updateValue}/>}
        <textarea name="content" placeholder="Take a note..." value={note.content} onChange={updateValue} onClick={clickNote} rows={startNote ? 3 : 1} />
        <Zoom in={startNote}>
        <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
