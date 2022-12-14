import * as credentialRepository from '../repositories/credentialRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptData, decryptData } from '../utils/encryptUtil';

export async function getCredentialById(id: string, ownerId: string) {
    const credential = await credentialRepository.findCredentialById(id);

    if (!credential) {
        throw CustomError('error_not_found', 'Could not find specified credential');
    }

    if (credential.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access credential');
    }

    return credential;
}

export async function getAllDecryptedCredentials(ownerId: string) {
    const credentials = await credentialRepository.findAllCredentials(ownerId);

    const decryptedCredentials = credentials.map((credential) => ({ ...credential, password: decryptData(credential.password) }));

    return decryptedCredentials;
}

export async function getDecryptedCredentialById(id: string, ownerId: string) {
    const credential = await getCredentialById(id, ownerId);

    const decryptedCredential = { ...credential, password: decryptData(credential.password) };

    return decryptedCredential;
}

export async function createCredential(credentialData: credentialRepository.ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    const duplicatedCredential = await credentialRepository.findCredentialByOwnerIdAndTitle(ownerId, title);

    if (duplicatedCredential) {
        throw CustomError('error_conflict', 'Credential with same title already exists');
    }

    await credentialRepository.insertCredential({ ownerId, title, url, username, password: encryptData(password) });
}

export async function deleteCredential(id: string, ownerId: string) {
    await getCredentialById(id, ownerId);

    await credentialRepository.deleteCredential(id);
}
