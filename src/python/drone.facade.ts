import { DroneFacadeInterface } from './drone.facade.interface';
import { LatLngLiteral } from './../../node_modules/angular2-google-maps/core';

/**
 * Following facade class, functions as a facade to the python domain
 * TODO: TO BE IMPLEMENTED
 */
export class DroneFacade implements DroneFacadeInterface{

    /**
     * TODO: TO BE IMPLEMENTED
     */    
    public connect(connectionString: String, callback: (n: number) => any){
        var tempString = connectionString;
        callback(1);
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public arm(connectionString: String, callback:(n: number) => any){
        var tempString = connectionString;
        callback(1);
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public takeOff(connectionString: String, callback:(n: number) => any){
        var tempString = connectionString;
        callback(1);
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public landOnGround(connectionString: String, callback:(n: number) => any){
        var tempString = connectionString;
        callback(1);
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public flyFromAtoB(connectionString: String, a: String, b: String, callback:(s: String) => any){
        var tempString = connectionString,
            tempA = a,
            tempB = b;
        
        callback('Not implemented yet');
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public returnToHome(connectionString: String, b: String, callback:(s: String) => any){
        var tempString = connectionString,
            tempB = b;

        callback('Not implemented yet');
    }

    /**
     * TODO: TO BE IMPLEMENTED
     */
    public abort(connectionString: String, b: String, callback:(s: String) => any){
        var tempString = connectionString,
            tempB = b;

        callback('Not implemented yet');
    }

}
