import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.CRYPT_SECRET as string);

export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

export function validatePassword(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
}

export function encryptPassword(password: string) {
    return cryptr.encrypt(password);
}
