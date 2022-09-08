import { Request, Response } from 'express';

import * as wifiService from '../services/wifiService';

export async function getAllWifis() {
    //
}

export async function getWifiById() {
    //
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
