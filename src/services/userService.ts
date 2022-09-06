import * as userRepository from '../repositories/userRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { hashPassword } from '../utils/encryptUtil';

export async function getByEmail(email: string) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
        CustomError('error_not_found', 'Could not find specified account');
    }

    return user;
}

export async function createUser(email: string, password: string) {
    const user = await getByEmail(email);

    if (user) {
        throw CustomError('error_conflict', 'An account is already linked to this email');
    }

    const hashedPassword = await hashPassword(password);

    await userRepository.insert({ email, password: hashedPassword });
}

export async function createSession() {
    //
}
