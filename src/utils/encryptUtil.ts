import bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

export function cryptPassword() {
    //
}
