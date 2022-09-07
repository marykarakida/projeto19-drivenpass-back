import { Credentials } from '@prisma/client';
import client from '../config/database';

export type ICredentialData = Omit<Credentials, 'id' | 'createdAt'>;

export async function findAllCredentials(ownerId: number) {
    const result = await client.credentials.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findCredentialById(id: number) {
    const result = await client.credentials.findFirst({
        where: { id },
    });

    return result;
}

export async function findCredentialByOwnerIdAndTitle(ownerId: number, title: string) {
    const result = await client.credentials.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function insertCredential(credentialData: ICredentialData) {
    const { ownerId, title, url, username, password } = credentialData;

    await client.credentials.create({
        data: { ownerId, title, url, username, password },
    });
}

export async function deleteCredential(id: number) {
    await client.credentials.delete({
        where: { id },
    });
}
