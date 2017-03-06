import {LatLngLiteral} from 'angular2-google-maps/core';
import {MapActionType} from './map-action-type.enum';

export interface IMapAction {
    type: MapActionType;
    paths: Array<LatLngLiteral>;    
}
