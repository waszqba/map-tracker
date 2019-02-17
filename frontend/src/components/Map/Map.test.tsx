import * as React from 'react';
import Map from './Map';

describe('map', () => {
    window.URL.createObjectURL = jest.fn();
    it('should factor with proper initial props', () => {
        const component = new Map({});
        expect(component.state).toMatchObject({
            lng: 18.608418,
            lat: 54.376070,
            zoom: 14
        });
    });
});
