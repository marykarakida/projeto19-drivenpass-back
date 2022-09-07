import * as cardRepository from '../repositories/cardRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptData } from '../utils/encryptUtil';

export async function getAllCards() {
    //
}

export async function getCardById() {
    //
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
