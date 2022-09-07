import { Request, Response } from 'express';

import * as cardService from '../services/cardService';

export async function getAllCards(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;

    const cards = await cardService.getAllDecryptedCards(Number(ownerId));

    res.status(200).send(cards);
}

export async function getCardById() {
    //
}

export async function createCard(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;
    const { title, number, cardHolderName, expirationDate, securityCode, password, isVirtual, type } = req.body;

    await cardService.createCard({
        ownerId: Number(ownerId),
        title,
        number,
        cardHolderName,
        expirationDate,
        securityCode,
        password,
        isVirtual,
        type,
    });

    res.status(201).send();
}

export async function deleteCard() {
    //
}
