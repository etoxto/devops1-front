const API_BASE = "http://localhost:8080/notes";

export async function fetchNotes() {
    const res = await fetch(API_BASE);
    return res.json();
}

export async function addNote(note) {
    const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    });
    return res.json();
}

export async function deleteNote(id) {
    return fetch(API_BASE, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
    });
}
