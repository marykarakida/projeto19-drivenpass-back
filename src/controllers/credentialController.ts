import { Request, Response } from 'express';

import * as credentialService from '../services/credentialService';

export async function getAllCredentials() {
    //
}

export async function getCredentialById() {
    //
}

export async function createCredential(req: Request, res: Response) {
    const { userId } = res.locals;
    const { title, url, username, password } = req.body;

    await credentialService.createCredential({ ownerId: Number(userId), title, url, username, password });

    res.status(201).send();
}

export async function deleteCredential() {
    //
}
