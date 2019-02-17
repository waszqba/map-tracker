import { expect } from 'chai';
import MapboxController from '../src/controllers/mapbox.controller';

describe('mapbox controller', () => {
    it('should construct with a proper path set', () => {
        const MBController = new MapboxController();
        expect(MBController.path).to.equal('/mapbox');
    });
});
