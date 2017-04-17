import { IDroneFacade } from './idrone-facade';
import { LatLngLiteral } from './../../node_modules/angular2-google-maps/core';

export class DroneFacade implements IDroneFacade{
    
    // TODO: should be implemented in another issue
    public connect(homePosition: LatLngLiteral){
        return homePosition;
    }

    // TODO: should be implemented in another issue
    public arm(){

    }

    // TODO: should be implemented in another issue
    public flyTo(coord: LatLngLiteral){
        return coord;
    }

    // TODO: should be implemented in another issue
    public returnToHome(){

    }

    // TODO: should be implemented in another issue
    public abort(){

    }
}
