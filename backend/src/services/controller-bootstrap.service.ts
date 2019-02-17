import BaseController from '../controllers/base-controller';
import CoordinatesController from '../controllers/coordinates.controller';
import MapboxController from '../controllers/mapbox.controller';

class ControllerBootstrapService {
    static get controllers(): BaseController[] {
        return [
            new MapboxController(),
            new CoordinatesController()
        ];
    }
}

export default ControllerBootstrapService;
