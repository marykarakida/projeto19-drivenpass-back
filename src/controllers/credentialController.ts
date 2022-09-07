import { Request, Response } from 'express';

import * as credentialService from '../services/credentialService';

export async function getAllCredentials(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;

    const credentials = await credentialService.getAllCredentials(Number(ownerId));

    res.status(200).send(credentials);
}

export async function getCredentialById() {
    //
}

export async function createCredential(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;
    const { title, url, username, password } = req.body;

    await credentialService.createCredential({ ownerId: Number(ownerId), title, url, username, password });

    res.status(201).send();
}

export async function deleteCredential() {
    //
}
