import NoteItem from "./NoteItem";

function NoteList({
  notes,
  deleteNote,
  editNote,
  toggleImportant
}) {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
          toggleImportant={toggleImportant}
        />
      ))}
    </div>
  );
}

export default NoteList;