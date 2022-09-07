import * as noteRepository from '../repositories/noteRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

export async function getAllNotes(ownerId: number) {
    const notes = await noteRepository.findtAllNotes(ownerId);

    return notes;
}

export async function getNoteById() {
    //
}
export async function createNote(noteData: noteRepository.INoteData) {
    const { ownerId, title, note } = noteData;

    const duplicatedNote = await noteRepository.findNoteByOwnerIdAndTitle(ownerId, title);

    if (duplicatedNote) {
        throw CustomError('error_conflict', 'Note with same title already exists');
    }

    await noteRepository.insertNote({ ownerId, title, note });
}
export async function deleteNote() {
    //
}
