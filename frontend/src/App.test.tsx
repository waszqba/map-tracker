import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
    DISCLAIMER: All tests will fail due to mapbox-gl incompatibility with node environment
 */

describe('App', () => {
    window.URL.createObjectURL = jest.fn();
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
