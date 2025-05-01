import React, { useState } from "react";
import { addNote } from "../api";

export default function NoteForm({ onNoteAdded }) {
    const [owner, setOwner] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const note = {
            owner,
            description,
            createdDate: new Date().toISOString(),
        };
        await addNote(note);
        setOwner("");
        setDescription("");
        onNoteAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Note</button>
        </form>
    );
}
