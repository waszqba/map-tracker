import { Marker } from 'mapbox-gl';
import config from '../../config';
import { EndpointsEnum } from '../../enums/endpoints.enum';
import { CoordinateInterface } from '../../interfaces/coordinate.interface';
import { PointInterface } from '../../interfaces/point.interface';

class MarkerService {

    private mapPoints: PointInterface[] = [];

    get points(): PointInterface[] {
        return this.mapPoints;
    }

    constructor() {
        this.loadPoints();
    }

    updateMarker(update: CoordinateInterface) {
        const changeSubject = this.mapPoints.find(point => point.id === update.id);
        if (changeSubject) {
            this.easeMarker(changeSubject, update);
        }
    }

    private async loadPoints(): Promise<void> {
        const coordinatesRequest = await fetch(`${config.API_URL}${EndpointsEnum.COORDINATES}`);
        const coordinates: CoordinateInterface[] = await coordinatesRequest.json();
        this.mapPoints = coordinates.map((point: CoordinateInterface): PointInterface =>
            ({
                ...point,
                marker: new Marker({
                    anchor: 'bottom'
                }).setLngLat(point.coordinate)
            })
        );
    }

    private easeMarker(point: PointInterface, update: CoordinateInterface): void {
        const { marker } = point;
        const el = marker.getElement();
        el.classList.add('moving-marker');
        marker.setLngLat(update.coordinate);
        setTimeout(() => el.classList.remove('moving-marker'), 250);
    }
}

export default MarkerService;
