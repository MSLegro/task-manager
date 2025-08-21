import { useEffect, useState } from "react";
import Dashboard from "./features/notes/components/Dashboard/Dashboard";
import Header from "./features/notes/components/Header/Header";
import { NewNote } from "./components/NewNote/NewNote";
import type { Note } from "./features/notes/types";
import { getNotes } from "./features/notes/services/getNotes";

export default function App() {
  const [notes, setNotes] = useState([] as Note[]);
  const [showNewNote, setShowNewNote] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await getNotes();
      setNotes(notes);
    }
    fetchNotes();
  }, []);

  function handleNewNote(note: Note) {
    if (mode === "create") {
      setNotes((prevNotes) => [...prevNotes, note]);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === note.id ? note : n))
      );
    }
  }

  function toggleNewNote(mode: string = "create", note?: Note) {
    mode !== "edit" && setShowNewNote((prev) => !prev);
    setSelectedNote(note);
    setMode(mode);
  }
  return (
    <>
      <Header toggleNewNote={toggleNewNote} />
      <Dashboard notes={notes} toggleNewNote={toggleNewNote} />
      {showNewNote && (
        <NewNote
          mode={mode}
          note={selectedNote}
          toggleNewNote={toggleNewNote}
          handleNewNote={handleNewNote}
        />
      )}
    </>
  );
}
