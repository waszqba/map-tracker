import { DistancePrecisionEnum } from '../enums/distance-precision.enum';
import { SocketEventsEnum } from '../enums/socket-events.enum';
import { CoordinateInterface } from '../interfaces/coordinate.interface';
import SocketService from './socket.service';

class MapService {

    private readonly baseCoord: [number, number] = [18.608418, 54.376070];
    private readonly points: CoordinateInterface[] = [];
    private readonly socketService: SocketService;

    constructor(pointsNumber?: number) {
        this.socketService = new SocketService();
        this.generatePoints(pointsNumber);
    }

    get coordinates(): CoordinateInterface[] {
        return this.points;
    }

    private movePoint(point: CoordinateInterface): void {
        point.coordinate = MapService.lngLatPair(point.coordinate, DistancePrecisionEnum.HIGH);
        this.socketService.sendChange(SocketEventsEnum.POINT_UPDATE, point);
    }

    private generatePoints(ammount: number = 10): void {
        while (ammount--) {
            const point: CoordinateInterface = {
                id: ammount,
                coordinate: MapService.lngLatPair(this.baseCoord, DistancePrecisionEnum.LOW)
            };
            this.points.push(point);
            setInterval(() => this.movePoint(point), Math.random() * 3000 + 1000);
        }
    }

    private static randomizeLngLat(baseLngLat: number, precision: DistancePrecisionEnum): number {
        const directionModifier = Math.round(Math.random()) || -1;
        const changeVector = Math.random() / precision * directionModifier;
        const fixedLengthCoord = (baseLngLat + changeVector).toFixed(6);
        return Number(fixedLengthCoord);
    }

    private static lngLatPair = (coord: [number, number], precision: DistancePrecisionEnum): [number, number] =>
        ([
            MapService.randomizeLngLat(coord[0], precision),
            MapService.randomizeLngLat(coord[1], precision)
        ])
}

export default MapService;
