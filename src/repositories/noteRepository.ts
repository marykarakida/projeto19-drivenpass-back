import { notes } from '@prisma/client';
import client from '../config/database';

export type INoteData = Omit<notes, 'id' | 'createdAt'>;

export async function findtAllNotes(ownerId: number) {
    const result = await client.notes.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findNoteById() {
    //
}

export async function findNoteByOwnerIdAndTitle(ownerId: number, title: string) {
    const result = await client.notes.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function insertNote(noteData: INoteData) {
    const { ownerId, title, note } = noteData;

    await client.notes.create({
        data: { ownerId, title, note },
    });
}
export async function deleteNote() {
    //
}
