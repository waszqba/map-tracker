import * as express from 'express';
import { RestMethodsEnum } from '../enums/rest-methods.enum';

export interface ControllerRouteInterface {
    method: RestMethodsEnum;
    path?: string;
    action: (req: express.Request, res: express.Response) => void;
}
