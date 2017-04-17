import {LatLngLiteral} from './../../node_modules/angular2-google-maps/core';

// This file serves as interface, as well as a contract for working with the python-layer
// This Facade, should call the necessary python-files in order to accomplish its functions.
export interface IDroneFacade{

    // Connects to the vehicle. Should take a home position, as this is very important to have.
    connect(homePosition: LatLngLiteral);

    // Arms the vehicle
    arm();

    // Gives a coordinate to the vehicle to fly to
    flyTo(coord: LatLngLiteral);

    // The vehicle should fly home position 
    returnToHome();

    // Should abort whatever the drone is currently doing, and just hovering. 
    abort();


}