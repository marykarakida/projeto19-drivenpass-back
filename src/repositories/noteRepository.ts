import { Note } from '@prisma/client';
import client from '../config/database';

export type INoteData = Omit<Note, 'id' | 'createdAt'>;

export async function findtAllNotes(ownerId: string) {
    const result = await client.note.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findNoteById(id: string) {
    const result = await client.note.findFirst({
        where: { id },
    });

    return result;
}

export async function findNoteByOwnerIdAndTitle(ownerId: string, title: string) {
    const result = await client.note.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function insertNote(noteData: INoteData) {
    const { ownerId, title, note } = noteData;

    await client.note.create({
        data: { ownerId, title, note },
    });
}

export async function deleteNote(id: string) {
    await client.note.delete({
        where: { id },
    });
}
