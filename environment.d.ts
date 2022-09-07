import { Secret } from 'jsonwebtoken';

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            DATABASE_URL: string;
            JWT_SECRET: Secret;
        }
    }
}
