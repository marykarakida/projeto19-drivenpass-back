import * as wifiRepository from '../repositories/wifiRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptData, decryptData } from '../utils/encryptUtil';

export async function getWifiById(id: string, ownerId: string) {
    const wifi = await wifiRepository.findWifiById(id);

    if (!wifi) {
        throw CustomError('error_not_found', 'Could not find specified wifi');
    }

    if (wifi.ownerId !== ownerId) {
        throw CustomError('error_forbidden', 'Cannot access wifi');
    }

    return wifi;
}

export async function getAllDecryptedWifis(ownerId: string) {
    const wifis = await wifiRepository.findAllWifis(ownerId);

    const decryptedWifis = wifis.map((wifi) => ({
        ...wifi,
        password: decryptData(wifi.password),
    }));

    return decryptedWifis;
}

export async function getDecryptedWifiById(id: string, ownerId: string) {
    const wifi = await getWifiById(id, ownerId);

    const decryptedWifi = { ...wifi, password: decryptData(wifi.password) };

    return decryptedWifi;
}

export async function createWifi(wifiData: wifiRepository.IWifiData) {
    const { ownerId, title, networkName, password } = wifiData;

    await wifiRepository.insertWifi({
        ownerId,
        title,
        networkName,
        password: encryptData(password),
    });
}

export async function deleteWifi(id: string, ownerId: string) {
    await getWifiById(id, ownerId);

    await wifiRepository.deleteWifi(id);
}
