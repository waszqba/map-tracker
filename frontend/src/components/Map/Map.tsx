import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
import config from '../../config';
import { MapStateInterface } from '../../interfaces/map-state.interface';
import MapboxService from '../../services/auth/mapbox.service';
import MarkerService from '../../services/map/marker.service';
import UpdatesService from '../../services/map/updates.service';

import './Map.css';

class Map extends Component {
    state: MapStateInterface;
    private mapRef: HTMLElement | null = null;
    private readonly markerService: MarkerService;
    private readonly updatesService: UpdatesService;
    constructor(props: Readonly<{}>) {
        super(props);
        this.markerService = new MarkerService();
        this.updatesService = new UpdatesService(this.markerService);
        this.state = {
            lng: 18.608418,
            lat: 54.376070,
            zoom: 14
        };
    }

    async componentDidMount(): Promise<void> {
        mapboxgl.accessToken = await MapboxService.fetchMapBoxToken();
        if (!mapboxgl.accessToken) {
            return alert('Couldn\'t connect with API');
        }
        const { lng, lat, zoom } = this.state;
        if (!lng || !lat || !zoom) {
            return;
        }
        this.initializeMap(lng, lat, zoom);
    }

    render() {
        return <div className='map-container' ref={this.setRef} />;
    }

    private initializeMap = (lng: number, lat: number, zoom: number): void => {
        if (!this.mapRef) {
            return;
        }
        const map = new mapboxgl.Map({
            container: this.mapRef,
            style: config.MAP_STYLES,
            center: [lng, lat],
            zoom
        });
        map.on('load', () => {
            map.resize();
            this.markerService.points.forEach(point => point.marker.addTo(map));
        });
    }

    private setRef = (el: HTMLElement | null) => {
        /*
         *  React's createRef results in conflicts, requiring to create HTMLDivElement
         *  which is incompatible with HTMLElement required by MapBox
         */
        if (el) {
            this.mapRef = el;
        }
    }
}

export default Map;
