import { credentials } from '@prisma/client';
import client from '../config/database';

export type ICredentialData = Omit<credentials, 'id' | 'createdAt'>;

export async function getAllCredentials(ownerId: number) {
    const result = await client.credentials.findMany({
        where: { ownerId },
    });

    return result;
}

export async function getCredentialById(id: number) {
    const result = await client.credentials.findFirst({
        where: { id },
    });

    return result;
}

export async function getCredentialByOwnerIdAndTitle(ownerId: number, title: string) {
    const result = await client.credentials.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function createCredential(credentialData: ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    await client.credentials.create({
        data: { ownerId, title, url, username, password },
    });
    //
}

export async function deleteCredential() {
    //
}
