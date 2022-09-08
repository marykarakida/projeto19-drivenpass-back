import { Card } from '@prisma/client';
import client from '../config/database';

export type ICardData = Omit<Card, 'id' | 'createdAt'>;

export async function findAllCards(ownerId: string) {
    const result = await client.card.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findCardById(id: string) {
    const result = await client.card.findFirst({
        where: { id },
    });

    return result;
}

export async function findCardByOwnerIdAndTitle(ownerId: string, title: string) {
    const result = await client.card.findUnique({
        where: { ownerId_title: { ownerId, title } },
    });

    return result;
}

export async function insertCard(cardData: ICardData) {
    const { ownerId, title, number, cardHolderName, expirationDate, securityCode, password, isVirtual, type } = cardData;

    await client.card.create({
        data: { ownerId, title, number, cardHolderName, expirationDate, securityCode, password, isVirtual, type },
    });
}

export async function deleteCard(id: string) {
    await client.card.delete({
        where: { id },
    });
}
