import { IMapActionStack } from './imap-action-stack';
import { IMapAction } from './imap-action';
import { MapAction } from './map-action'
import { LatLngLiteral } from 'angular2-google-maps/core';

// TODO: later implement functionality to undo AND redo

export class MapActionStack implements IMapActionStack {
    stack: Array<IMapAction> = [];

    public push(mapAction: IMapAction) {
        var newMapAction: IMapAction = new MapAction(mapAction.type, 
        (function (paths: Array<LatLngLiteral>): Array<LatLngLiteral> {
            var tempArray: Array<LatLngLiteral> = [];
            paths.forEach(function (path) {
                tempArray.push({ lat: path.lat, lng: path.lng });
            });
            return tempArray;
        })(mapAction.paths));
        this.stack.push(newMapAction);
    }

    public pop(): IMapAction | undefined {
        var tempAction;
        if (this.stack.length > 0) {
            tempAction = this.stack.pop();
        }
        return tempAction;
    }

    public getSize(): number {
        return this.stack.length;
    }

    public isEmpty(): boolean {
        return this.stack.length == 0 ? true : false;
    }
}
