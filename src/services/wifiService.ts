import * as wifiRepository from '../repositories/wifiRepository';
import { CustomError } from '../middlewares/errorHandlerMiddleware';

import { encryptData, decryptData } from '../utils/encryptUtil';

export async function getWifiById() {
    //
}

export async function getAllDecryptedWifis() {
    //
}

export async function getDecryptedWifiById() {
    //
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

export async function deleteCard() {
    //
}