var m1 = (function(){
    var x = 10;

    console.log(this)
    // method();

    function method(){
        return x;
    }

    // return method; // api

    return {
        name: 'm1'
    }
})();

