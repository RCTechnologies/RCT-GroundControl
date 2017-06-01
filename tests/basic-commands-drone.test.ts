import test from 'ava';
import {DroneTestFacade} from '../src/python/drone.test.facade';
import {DroneFacadeInterface} from '../src/python/drone.facade.interface';

/**
 * Simple test for reference:
 * Tests the connection of a drone. 
 * connectionString variable can be altered to be the IP of a physical drone.
 */
test.cb('Test of connect to drone()', t => {
    var connectionString = 'none';
    var droneTestFacade: DroneFacadeInterface = new DroneTestFacade();
    var callback = function(resultCode){
        t.is(resultCode, 0);
        t.end();
    };
    droneTestFacade.connect(connectionString, callback);
})

