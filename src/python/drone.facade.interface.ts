import {LatLngLiteral} from './../../node_modules/angular2-google-maps/core';

// This file serves as interface, as well as a contract for working with the python-layer
// This Facade, should call the necessary python-files in order to accomplish its functions.
export interface DroneFacadeInterface{

    /**
     * Connects to the vehicle. Takes in a connection string and callback function.
     */
    connect(connectionString: String, callback: (n: number) => any);

    /**
     * Should arm the vehicle. Takes in a connection string and callback function.
     */
    arm(connectionString: String, callback:(n: number) => any);

    /**
     * Should perform a takeoff. Takes in a connection string and callback function.
     */
    takeOff(connectionString: String, callback:(n: number) => any);

    /**
     * Should land on the ground. Takes in a connection string and a callback function.
     */
    landOnGround(connectionString: String, callback:(n: number) => any);

    /**
     * Should fly from A to B. Takes in a connection string and a callback function.
     */
    flyFromAtoB(connectionString: String, a: String, b: String, callback:(s: String) => any);

    /**
     * Should return to home. Takes in a connection string and a callback function.
     */
    returnToHome(connectionString: String, b: String, callback:(s: String) => any);

    /**
     * Should abort current activity, and go in pause mode. Takes in a connection string and a callback function.
     */
    abort(connectionString: String, b: String, callback:(s: String) => any);


}