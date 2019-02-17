import config from '../../config';
import { EndpointsEnum } from '../../enums/endpoints.enum';

class MapboxService {
    static async fetchMapBoxToken(): Promise<string> {
        const response = await fetch(`${config.API_URL}${EndpointsEnum.MAPBOX}`);
        const token = await response.json();
        return token.key;
    }
}

export default MapboxService;
