import { Request, Response } from 'express';

import * as wifiService from '../services/wifiService';

export async function getAllWifis(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;

    const wifis = await wifiService.getAllDecryptedWifis(ownerId);

    res.status(200).send(wifis);
}

export async function getWifiById(req: Request, res: Response) {
    const { id } = req.params;
    const { userId: ownerId } = res.locals;

    const wifi = await wifiService.getDecryptedWifiById(id, ownerId);

    res.status(200).send(wifi);
}

export async function createWifi(req: Request, res: Response) {
    const { userId: ownerId } = res.locals;
    const { title, networkName, password } = req.body;

    await wifiService.createWifi({ ownerId, title, networkName, password });

    res.status(201).send();
}

export async function deleteNote() {
    //
}
