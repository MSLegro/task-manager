import type { Note } from "../../features/notes/types";
import "./NotePreview.css";

interface NotePreviewProps {
  note: Note;
  toggleNewNote: (mode?: string, note?: Note) => void;
}
export default function NotePreview({ note, toggleNewNote }: NotePreviewProps) {
  function showType(type: string): string {
    switch (type) {
      case "urgent":
        return "Urgente";
      case "normal":
        return "Normal";
      case "recurring":
        return "Recurrente";
    }
    return "Normal";
  }

  return (
    <article
      className={`note-preview ${note.type}`}
      onClick={() => toggleNewNote("view", note)}
    >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-type">
        <div />
        <p>{showType(note.type)}</p>
      </div>

      <div className="note-menu">
        <button className="menu-btn">⋮</button>
        <ul className="menu-options">
          <li onClick={() => toggleNewNote("edit", note)}>Editar</li>
          <li onClick={() => toggleNewNote("delete", note)}>Eliminar</li>
        </ul>
      </div>
    </article>
  );
}
