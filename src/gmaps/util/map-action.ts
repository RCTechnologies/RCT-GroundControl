import { IMapAction} from './imap-action';
import { MapActionType } from './map-action-type.enum';
import {LatLngLiteral} from './../../../node_modules/angular2-google-maps/core';

export class MapAction implements IMapAction{
    type: MapActionType;
    paths: Array<LatLngLiteral>;

    constructor(mapActionType: MapActionType, paths: Array<LatLngLiteral>){
        this.type = mapActionType;
        this.paths = paths;
    }

    public getType(): MapActionType{
        return this.type;
    }

    public getPaths(): Array<LatLngLiteral>
    {
        return this.paths;
    }

}
