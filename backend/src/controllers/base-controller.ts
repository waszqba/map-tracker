import * as express from 'express';
import { ControllerRouteInterface } from '../interfaces/controller-route.interface';

abstract class BaseController {
    public path: string;
    public readonly router = express.Router();
    protected routes: ControllerRouteInterface[];

    protected constructor() {
        this.routes = [];
    }

    protected initializeRoutes(): void {
        this.routes.forEach(route => {
            this.router[route.method](`${this.path}${route.path || ''}`, route.action);
        });
    }
}

export default BaseController;
