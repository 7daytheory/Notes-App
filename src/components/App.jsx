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

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem.index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
