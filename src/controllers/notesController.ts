import { Request, Response } from 'express';

import * as noteService from '../services/noteService';

export async function getAllNotes(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;

    const notes = await noteService.getAllNotes(ownerId);

    res.status(200).send(notes);
}

export async function getNoteById(req: Request, res: Response) {
    const { id } = req.params;
    const { userId: ownerId } = res.locals;

    const note = await noteService.getNoteById(id, ownerId);

    res.status(200).send(note);
}

export async function createNote(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;
    const { title, note } = req.body;

    await noteService.createNote({ ownerId, title, note });

    res.status(201).send();
}

export async function deleteNote(req: Request, res: Response) {
    const { id } = req.params;
    const { userId: ownerId } = res.locals;

    await noteService.deleteNote(id, ownerId);

    res.status(200).send();
}
