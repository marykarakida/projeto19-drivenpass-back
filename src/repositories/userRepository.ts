import { User } from '@prisma/client';
import client from '../config/database';

export type IUserInsertData = Omit<User, 'id' | 'createdAt'>;

export async function findById(id: number) {
    const result = await client.user.findUnique({
        where: { id },
    });

    return result;
}

export async function findByEmail(email: string) {
    const result = await client.user.findUnique({
        where: { email },
    });

    return result;
}

export async function insert(userData: IUserInsertData) {
    const { email, password } = userData;

    await client.user.create({
        data: { email, password },
    });
}
