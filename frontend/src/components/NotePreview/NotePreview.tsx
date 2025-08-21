import type { Note } from "../../features/notes/types";
import "./NotePreview.css";

interface NotePreviewProps {
  note: Note;
  toggleNewNote: (mode?: string, note?: Note) => void;
}
export default function NotePreview({ note, toggleNewNote }: NotePreviewProps) {
  return (
    <article
      className={`note-preview ${note.type}`}
      onClick={() => toggleNewNote("view", note)}
    >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-type">
        <div />
        <p>{note.type}</p>
      </div>
    </article>
  );
}
