import { Request, Response } from 'express';

import * as cardService from '../services/cardService';

export async function getAllCards(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;

    const cards = await cardService.getAllDecryptedCards(ownerId);

    res.status(200).send(cards);
}

export async function getCardById(req: Request, res: Response) {
    const { id } = req.params;
    const { userId: ownerId } = res.locals;

    const card = await cardService.getDecryptedCardById(id, ownerId);

    res.status(200).send(card);
}

export async function createCard(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;
    const { title, number, cardHolderName, expirationDate, securityCode, password, isVirtual, type } = req.body;

    await cardService.createCard({
        ownerId,
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

export async function deleteCard(req: Request, res: Response) {
    const { id } = req.params;
    const { userId: ownerId } = res.locals;

    await cardService.deleteCard(id, ownerId);

    res.status(200).send();
}
