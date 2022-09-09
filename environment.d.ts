import { Secret } from 'jsonwebtoken';

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            DATABASE_URL: string;
            ACCESS_TOKEN_SECRET: Secret;
            REFRESH_TOKEN_SECRET: Secret;
            CRYPT_SECRET: string;
        }
    }
}
