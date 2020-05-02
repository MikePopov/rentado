import { Request, Response } from "express";
import {Flat} from "../models/rentado.model";
import {MongooseDocument} from "mongoose";

export class RentadoService {

    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Welcome to rentadoAPI REST by Misha ^^");
    }

    public getAllFlats(req: Request, res: Response) {
        Flat.find({}, (error: Error, flat: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(flat);
        });
    }

    public addNewFlat(req: Request, res: Response) {
        const newFlat = new Flat(req.body);
        newFlat.save((error: Error, flat: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(flat);
        });
    }
}