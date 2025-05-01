import React, { useEffect, useState } from "react";
import { fetchNotes } from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const loadNotes = () => {
    fetchNotes().then(setNotes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
      <div>
        <h1>Notes</h1>
        <NoteForm onNoteAdded={loadNotes} />
        <NoteList notes={notes} onNoteDeleted={loadNotes} />
      </div>
  );
}

export default App;
