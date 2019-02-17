import { expect } from 'chai';
import MapService from '../src/services/map.service';

describe('map service', () => {
    it('should generate points with proper structure', () => {
        const lngLat: [number, number] = [Math.random() * 100, Math.random() * 100];
        const newLngLat = MapService['lngLatPair'](lngLat, 2000);
        expect(Math.floor(lngLat[0])).to.equal(Math.floor(newLngLat[0]));
        expect(Math.floor(lngLat[1])).to.equal(Math.floor(newLngLat[1]));
    });
    it('should create an appropriate 10 starting points', () => {
        const pointsNumber = 10;
        const mapService = new MapService(pointsNumber);
        expect(mapService.coordinates.length).to.equal(pointsNumber);
    });
});
