import {LatLngLiteral} from './../../../node_modules/angular2-google-maps/core';
import {MapActionType} from './map-action-type.enum';

// The class that implements this interface, should function as a 'snapshot' of the current state of a given
// polygon, consisting of a MapActionType enum and the paths.
export interface IMapAction {
    type: MapActionType;
    paths: Array<LatLngLiteral>;    

    // This function should return the paths contained in a instance of a MapActionType
    getPaths(): Array<LatLngLiteral>;

    // This function shoud return the type contained in a instance of a MapActionType
    getType(): MapActionType;
}
