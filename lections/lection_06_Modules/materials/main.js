// "use strict"

var global = 100;

var config = {
    host: 'localhost',
    port: '8080'
}

// IIFE
var module = (function([cf]){
    var x = 10;
    // method();

    // console.log(window.global, global, this.global);
    console.log(cf);

    function method(){
        return x;
    }

    // return method; // api

    return {
        method,
        name: 'Name'
    }
})([config]);

// console.log(module);
// module.method();

// console.log(m1);