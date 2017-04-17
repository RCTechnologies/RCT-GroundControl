import { IDroneFacade } from './idrone-facade';
import { LatLngLiteral } from './../../node_modules/angular2-google-maps/core';

export class DroneFacade implements IDroneFacade{
    
    public connect(homePosition: LatLngLiteral){
        return homePosition;
    }

    public arm(){

    }

    public flyTo(coord: LatLngLiteral){
        return coord;
    }

    public returnToHome(){

    }

    public abort(){
        
    }
}
