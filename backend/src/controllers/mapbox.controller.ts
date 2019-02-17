import * as express from 'express';
import environment from '../../environment/environment';
import { RestMethodsEnum } from '../enums/rest-methods.enum';
import BaseController from './base-controller';

class MapboxController extends BaseController {

    constructor() {
        super();
        this.path = '/mapbox';
        this.routes = [
            {
                method: RestMethodsEnum.GET,
                action: this.getMapBoxApiKey
            }
        ];
        this.initializeRoutes();
    }

    private getMapBoxApiKey(req: express.Request, res: express.Response): void {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send({
            key: environment.MAPBOX_TOKEN
        });
    }
}

export default MapboxController;
