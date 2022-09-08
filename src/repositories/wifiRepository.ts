import { Wifi } from '@prisma/client';
import client from '../config/database';

export type IWifiData = Omit<Wifi, 'id' | 'createdAt'>;

export async function findAllWifis(ownerId: string) {
    const result = await client.wifi.findMany({
        where: { ownerId },
    });

    return result;
}

export async function findWifiById(id: string) {
    const result = await client.wifi.findFirst({
        where: { id },
    });

    return result;
}

export async function insertWifi(wifiData: IWifiData) {
    const { ownerId, title, networkName, password } = wifiData;

    await client.wifi.create({
        data: { ownerId, title, networkName, password },
    });
}

export async function deleteWifi() {
    //
}
