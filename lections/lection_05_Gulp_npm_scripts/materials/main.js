let fs = require('fs');
let args = process.env;

console.log('lection_5');

console.log(new Animal());
console.log(process.env);

if (args.env == 'production') {
    console.log('YES');
    console.log('start');
    var NAME = 'NAME';
    let list = require('./foo.js');
    console.log('end');
    console.log(list);
}


function Animal(){
    this.name = 'name';
}

Animal.prototype.run = function(){}



fs.readdir('./', function(err, items){
    if (err){
        console.log(err);

        return err;
    }

    console.log(items);

    items.forEach(item => {
        if (item.indexOf('.') == -1) {
            fs.readdir(`./${item}`, function(err, values){
                if(err) {
                    return;
                }

                console.log(item, values);
            });
        }
    })
});



// fs.readdir(path, cb(err, items));