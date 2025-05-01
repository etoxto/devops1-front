import React from "react";
import { deleteNote } from "../api";

export default function NoteList({ notes, onNoteDeleted }) {
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <strong>{note.owner}</strong>: {note.description}
                    <button onClick={() => {
                        deleteNote(note.id).then(onNoteDeleted);
                    }}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
