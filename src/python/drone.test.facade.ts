import { DroneFacadeInterface } from './drone.facade.interface';
import { LatLngLiteral } from './../../node_modules/angular2-google-maps/core';

export class DroneTestFacade implements DroneFacadeInterface{
    
    public connect(connectionString: String, callback: (n: number) => any){
        var spawn = require("child_process").spawn;
        var process = spawn('python',["./src/python/simple_command_tests/connect_to_drone.py"]);
        var result = '';
        var resultCode = 1;
        
        process.stdout.on('data', function (data) {
            result = ''+data;  
            var arr = result.split("\n");
            resultCode = +arr[arr.length - 2];
            callback(resultCode);
        })
        /**
         * ADDS ARGUMENT TO PROCESS
         */
        process.stdin.write(connectionString)
        process.stdin.end();
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
