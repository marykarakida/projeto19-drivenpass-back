import * as credentialRepository from '../repositories/credentialRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptPassword } from '../utils/encryptUtil';

export async function getAllCredentials() {
    //
}

export async function getCredentialById() {
    //
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
