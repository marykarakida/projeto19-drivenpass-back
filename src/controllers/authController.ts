import { Request, Response } from 'express';

import * as userService from '../services/userService';

export async function register(req: Request, res: Response) {
    const { email, password } = req.body;

    await userService.createUser(email, password);

    res.status(201).send();
}

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { accessToken, refreshToken } = await userService.createSession(email, password);

    res.status(200).send({ accessToken, refreshToken });
}
