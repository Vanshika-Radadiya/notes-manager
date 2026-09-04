import { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    addNote(text.trim());
    setText("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;