import { users } from '@prisma/client';
import client from '../config/database';

export type IUserInsertData = Omit<users, 'id' | 'createdAt'>;

export async function findByEmail(email: string) {
    const result = await client.users.findUnique({
        where: { email },
    });

    return result;
}

export async function insert(userData: IUserInsertData) {
    const { email, password } = userData;

    await client.users.create({
        data: { email, password },
    });
}
