import { Card } from '@prisma/client';

import * as cardRepository from '../repositories/cardRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptData, decryptData } from '../utils/encryptUtil';

export async function findCardById(id: number, ownerId: number) {
    const card = await cardRepository.findCardById(id);

    if (!card) {
        throw CustomError('error_not_found', 'Could not find specified card');
    }

    if (card.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access card');
    }

    return card;
}

export async function getAllDecryptedCards(ownerId: number) {
    const cards = await cardRepository.findAllCards(ownerId);

    const decryptedCards = cards.map((card) => ({
        ...card,
        securityCode: decryptData(card.securityCode),
        password: decryptData(card.password),
    }));

    return decryptedCards;
}

export async function getDecryptedCardById(id: number, ownerId: number) {
    const card = await findCardById(id, ownerId);

    const decryptedCard = { ...card, securityCode: decryptData(card.securityCode), password: decryptData(card.password) };

    return decryptedCard;
}

export async function createCard(cardData: cardRepository.ICardData) {
    const { ownerId, title, number, cardHolderName, expirationDate, securityCode, password, isVirtual, type } = cardData;

    const duplicatedCard = await cardRepository.findCardByOwnerIdAndTitle(ownerId, title);

    if (duplicatedCard) {
        throw CustomError('error_conflict', 'Card with same title already exists');
    }

    await cardRepository.insertCard({
        ownerId,
        title,
        number,
        cardHolderName,
        expirationDate,
        securityCode: encryptData(securityCode),
        password: encryptData(password),
        isVirtual,
        type,
    });
}

export async function deleteCard() {
    ///
}
