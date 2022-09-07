import * as credentialRepository from '../repositories/credentialRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptPassword, decryptPassword } from '../utils/encryptUtil';

export async function getAllCredentials(ownerId: number) {
    const credentials = await credentialRepository.getAllCredentials(ownerId);

    const decryptedCredentials = decryptPassword(credentials);

    return decryptedCredentials;
}

export async function getCredentialById(id: number, ownerId: number) {
    const credential = await credentialRepository.getCredentialById(id);

    if (!credential) {
        throw CustomError('error_not_found', 'Could not find specified credential');
    }

    if (credential.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access credential');
    }

    const [decryptedCredential] = decryptPassword([credential]);

    return decryptedCredential;
}

export async function createCredential(credentialData: credentialRepository.ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    const credential = await credentialRepository.getCredentialByOwnerIdAndTitle(ownerId, title);

    if (credential) {
        throw CustomError('error_conflict', 'Credential with same title already exists');
    }

    await credentialRepository.createCredential({ ownerId, title, url, username, password: encryptPassword(password) });
}

export async function deleteCredential() {
    //
}
