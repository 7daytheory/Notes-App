import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function AddNote(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function updateValue(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" value={note.title} onChange={updateValue}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} onChange={updateValue} rows="3" />
        <Zoom in={true}>
        <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
