import * as mapboxgl from 'mapbox-gl';
import { CoordinateInterface } from './coordinate.interface';

export interface PointInterface extends CoordinateInterface {
    marker: mapboxgl.Marker;
}
