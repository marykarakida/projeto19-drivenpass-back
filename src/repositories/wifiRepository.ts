import { Wifi } from '@prisma/client';
import client from '../config/database';

export type IWifiData = Omit<Wifi, 'id' | 'createdAt'>;

export async function findAllWifis() {
    //
}

export async function findWifiById() {
    //
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
