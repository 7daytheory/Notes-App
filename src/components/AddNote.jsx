import React, {useState} from "react";

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
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={updateValue}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} onChange={updateValue} rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
