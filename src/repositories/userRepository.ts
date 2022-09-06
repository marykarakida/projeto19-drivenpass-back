import client from '../config/database';

export interface IUser {
    id: number;
    email: string;
    password: string;
}

export type IUserInsertData = Omit<IUser, 'id'>;

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
