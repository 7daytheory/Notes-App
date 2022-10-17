import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from './AddNote';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((note, index) => {
          return index !== id;
        });
      });
    }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
