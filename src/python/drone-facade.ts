import { IDroneFacade } from './idrone-facade';
import { LatLngLiteral } from './../../node_modules/angular2-google-maps/core';

export class DroneFacade implements IDroneFacade{
    
    public connect(connectionString: String, callback: (n: number) => any){
        var spawn = require("child_process").spawn;
        var process = spawn('python',["./src/python/simplecommands/connecttodrone.py"]);
        var result = '';
        var resultCode = 1;
        
        process.stdout.on('data', function (data) {
            result = ''+data;  
            var arr = result.split("\n");
            resultCode = +arr[arr.length - 2];
            // t.is(arr[arr.length - 2], "0");
            // t.end(); 
            return callback(resultCode);
        })

        /**
         * ADDS ARGUMENT TO PROCESS
         */
        if(connectionString != null){
            process.stdin.write(connectionString)
            process.stdin.end();
        }
        //  return callback(1);
    }

    // TODO: should be implemented in another issue
    public arm(connectionString: String, callback: (n: number) => any){
        if(connectionString){
            
        }else{
            
        }
        return callback(1);
    }

    // TODO: should be implemented in another issue
    public flyTo(connectionString: String, coord: LatLngLiteral, callback: (n: number) => any){
        if(connectionString){
            
        }else{
            
        }

        var coord = coord;
        
        return callback(1);
    }

    // TODO: should be implemented in another issue
    public returnToHome(connectionString: String, callback: (n: number) => any){
        if(connectionString){
            
        }else{
            
        }
        return callback(1);
    }

    // TODO: should be implemented in another issue
    public abort(connectionString: String, callback: (n: number) => any){
        if(connectionString){
            
        }else{
            
        }
        return callback(1);
    }
}
