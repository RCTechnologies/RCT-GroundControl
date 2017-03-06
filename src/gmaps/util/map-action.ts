import { IMapAction} from './imap-action';
import { MapActionType } from './map-action-type.enum';
import {LatLngLiteral} from 'angular2-google-maps/core';

export class MapAction implements IMapAction{
    type: MapActionType;
    paths: Array<LatLngLiteral>;
    
    constructor(mapActionType, paths: Array<LatLngLiteral>){
        this.type = mapActionType;
        this.paths = paths;
    }
}
