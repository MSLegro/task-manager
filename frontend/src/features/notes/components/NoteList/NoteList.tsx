import NotePreview from "../../../../components/NotePreview/NotePreview";
import type { Note } from "../../types";

interface NoteListProps {
  notes: Note[];
  toggleNewNote: (mode?: string) => void;
}

export default function NoteList({ notes, toggleNewNote }: NoteListProps) {
  return (
    <section className="notes-container">
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} toggleNewNote={toggleNewNote} />
      ))}
    </section>
  );
}
