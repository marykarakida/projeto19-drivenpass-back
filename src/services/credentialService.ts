import * as credentialRepository from '../repositories/credentialRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptPassword, decryptPassword } from '../utils/encryptUtil';

export async function getAllCredentials(ownerId: number) {
    const credentials = await credentialRepository.findAllCredentials(ownerId);

    return credentials;
}

export async function getCredentialById(id: number, ownerId: number) {
    const credential = await credentialRepository.findCredentialById(id);

    if (!credential) {
        throw CustomError('error_not_found', 'Could not find specified credential');
    }

    if (credential.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access credential');
    }

    return credential;
}

export async function getAllDecryptedCredentials(ownerId: number) {
    const credentials = await getAllCredentials(ownerId);

    const decryptedCredentials = decryptPassword(credentials);

    return decryptedCredentials;
}

export async function getDecryptedCredentialById(id: number, ownerId: number) {
    const credential = await getCredentialById(id, ownerId);

    const [decryptedCredential] = decryptPassword([credential]);

    return decryptedCredential;
}

export async function createCredential(credentialData: credentialRepository.ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    const credential = await credentialRepository.findCredentialByOwnerIdAndTitle(ownerId, title);

    if (credential) {
        throw CustomError('error_conflict', 'Credential with same title already exists');
    }

    await credentialRepository.insertCredential({ ownerId, title, url, username, password: encryptPassword(password) });
}

export async function deleteCredential(id: number, ownerId: number) {
    await getCredentialById(id, ownerId);

    await credentialRepository.deleteCredential(id);
}
