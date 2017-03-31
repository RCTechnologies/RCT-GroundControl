import test from 'ava';


test.cb('Test of connect to drone()', t => {
          
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./src/python/simplecommands/connecttodrone.py"]);
    var result = '';

    process.stdout.on('data', function (data) {
        result = ''+data;  
        var arr = result.split("\n");
        t.is(arr[arr.length - 2], "0");
        t.end(); 
    })
})

