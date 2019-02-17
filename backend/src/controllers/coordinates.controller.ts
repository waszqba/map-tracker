import * as express from 'express';
import { RestMethodsEnum } from '../enums/rest-methods.enum';
import MapService from '../services/map.service';
import BaseController from './base-controller';

class CoordinatesController extends BaseController {
    private readonly mapService: MapService;
    constructor() {
        super();
        this.mapService = new MapService();
        this.path = '/coordinates';
        this.routes = [
            {
                method: RestMethodsEnum.GET,
                action: this.getInitialCoordinates
            }
        ];
        this.initializeRoutes();
    }

    private getInitialCoordinates = (req: express.Request, res: express.Response): void => {
        res.send(this.mapService.coordinates);
    }
}

export default CoordinatesController;
