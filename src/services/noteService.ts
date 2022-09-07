import * as noteRepository from '../repositories/noteRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

export async function getAllNotes(ownerId: number) {
    const notes = await noteRepository.findtAllNotes(ownerId);

    return notes;
}

export async function getNoteById(id: number, ownerId: number) {
    const note = await noteRepository.findNoteById(id);

    if (!note) {
        throw CustomError('error_not_found', 'Could not find specified note');
    }

    if (note.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access note');
    }

    return note;
}

export async function createNote(noteData: noteRepository.INoteData) {
    const { ownerId, title, note } = noteData;

    const duplicatedNote = await noteRepository.findNoteByOwnerIdAndTitle(ownerId, title);

    if (duplicatedNote) {
        throw CustomError('error_conflict', 'Note with same title already exists');
    }

    await noteRepository.insertNote({ ownerId, title, note });
}

export async function deleteNote(id: number, ownerId: number) {
    await getNoteById(id, ownerId);

    await noteRepository.deleteNote(id);
}
