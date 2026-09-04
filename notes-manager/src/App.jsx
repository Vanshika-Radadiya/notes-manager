import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  // Add a new note
  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
      important: false
    };

    setNotes([...notes, newNote]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit a note
  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  // Mark/unmark important
  const toggleImportant = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, important: !note.important }
          : note
      )
    );
  };

  return (
    <div className="app">
      <div className="container">

        <header>
          <h1>Notes Manager</h1>
          <p>Manage your notes efficiently</p>
        </header>

        <NoteForm addNote={addNote} />

        <div className="note-header">
          <h2>Your Notes</h2>
          <span>Total Notes: {notes.length}</span>
        </div>

        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
          toggleImportant={toggleImportant}
        />

        {notes.length === 0 && (
          <p className="empty-message">
            No notes available. Add a note to get started.
          </p>
        )}

      </div>
    </div>
  );
}

export default App;