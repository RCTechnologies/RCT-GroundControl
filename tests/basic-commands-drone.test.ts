import test from 'ava';
import {DroneFacade} from '../src/python/drone-facade';
import {IDroneFacade} from '../src/python/idrone-facade';

test.cb('Test of connect to drone()', t => {
          
    // var spawn = require("child_process").spawn;
    // var process = spawn('python',["./src/python/simplecommands/connecttodrone.py"]);
    // var result = '';

    // process.stdout.on('data', function (data) {
    //     result = ''+data;  
    //     var arr = result.split("\n");
    //     t.is(arr[arr.length - 2], "0");
    //     t.end(); 
    // })
    var connectionString = 'none';
    var droneFacade: IDroneFacade = new DroneFacade();
    droneFacade.connect(connectionString, function(resultCode){
        t.is(resultCode, 0)
        t.end();
    });
})

