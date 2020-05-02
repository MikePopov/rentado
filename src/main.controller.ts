import { Application } from 'express';
import {RentadoService} from "./services/rentado.service";

export class Controller {
    private rentadoService: RentadoService;

    constructor(private app: Application) {
        this.rentadoService = new RentadoService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.rentadoService.welcomeMessage);

        this.app.route('/flats').get(this.rentadoService.getAllFlats);

        this.app.route('/flat').post(this.rentadoService.addNewFlat);
    }
}