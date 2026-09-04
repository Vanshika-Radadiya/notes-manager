import { useState } from "react";

function NoteItem({
  note,
  deleteNote,
  editNote,
  toggleImportant
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.text);

  const handleSave = () => {
    if (editText.trim() === "") {
      return;
    }

    editNote(note.id, editText.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(note.text);
    setIsEditing(false);
  };

  return (
    <div className={`note ${note.important ? "important" : ""}`}>

      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
          autoFocus
        />
      ) : (
        <span className="note-text">
          {note.text}
        </span>
      )}

      <div className="note-actions">

        {isEditing ? (
          <>
            <button
              className="edit-btn"
              onClick={handleSave}
            >
              Save
            </button>

            <button
              className="important-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="important-btn"
              onClick={() => toggleImportant(note.id)}
            >
              {note.important ? "Unmark" : "Important"}
            </button>

            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default NoteItem;