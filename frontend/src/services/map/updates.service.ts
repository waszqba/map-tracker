import socketIO from 'socket.io-client';
import config from '../../config';
import { SocketEventsEnum } from '../../enums/socket-events.enum';
import { CoordinateInterface } from '../../interfaces/coordinate.interface';
import MarkerService from './marker.service';

class UpdatesService {
    private socket: any; // no usable type specified in library
    private readonly markerService: MarkerService;
    constructor(markersService: MarkerService) {
        this.markerService = markersService;
        this.initSocket();
    }

    private initSocket(): void {
        this.socket = socketIO(config.SOCKET_URL);
        this.socket.on(SocketEventsEnum.POINT_UPDATE, this.updatePosition);
    }

    private updatePosition = (update: CoordinateInterface): void => {
        this.markerService.updateMarker(update);
    }
}

export default UpdatesService;
