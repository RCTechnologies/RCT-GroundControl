import {LatLngLiteral} from './../../node_modules/angular2-google-maps/core';

// This file serves as interface, as well as a contract for working with the python-layer
// This Facade, should call the necessary python-files in order to accomplish its functions.
export interface IDroneFacade{

    // Connects to the vehicle. Should take a home position, as this is very important to have.
    connect(connectionString: String, callback: (n: number) => any);

    // Arms the vehicle
    arm(connectionString: String, callback: (n: number) => any);

    // Gives a coordinate to the vehicle to fly to
    flyTo(connectionString: String, coord: LatLngLiteral, callback: (n: number) => any);

    // The vehicle should fly home position 
    returnToHome(connectionString: String, callback: (n: number) => any);

    // Should abort whatever the drone is currently doing, and just hovering. 
    abort(connectionString: String, callback: (n: number) => any);


}