import { Credential } from '@prisma/client';
import client from '../config/database';

export type ICredentialData = Omit<Credential, 'id' | 'createdAt'>;

export async function findAllCredentials(ownerId: string) {
    const result = await client.credential.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findCredentialById(id: string) {
    const result = await client.credential.findFirst({
        where: { id },
    });

    return result;
}

export async function findCredentialByOwnerIdAndTitle(ownerId: string, title: string) {
    const result = await client.credential.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function insertCredential(credentialData: ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    await client.credential.create({
        data: { ownerId, title, url, username, password },
    });
}

export async function deleteCredential(id: string) {
    await client.credential.delete({
        where: { id },
    });
}
