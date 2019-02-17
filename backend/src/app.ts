import * as express from 'express';
import environment from '../environment/environment';
import BaseController from './controllers/base-controller';
import ControllerBootstrapService from './services/controller-bootstrap.service';

class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.configureCors();
        this.initializeControllers(ControllerBootstrapService.controllers);
    }

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`The app is listening on port ${port}...`);
        });
    }

    private initializeControllers(controllers: BaseController[]): void {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    private configureCors(): void {
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', environment.ACCEPT_ORIGIN);
            next();
        });
    }
}

export default App;
