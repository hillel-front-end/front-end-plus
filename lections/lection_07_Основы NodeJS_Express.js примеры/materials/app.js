let express = require('express');
let app = express();
let port = 3780;




// let data = 'asfnkjafkjakfmaks\n';

// fs.appendFile('log.txt', data, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


// MEAN - MongoDb, Express.js, Angular, Node.js 
console.log(1);

// app.use(function (req, res, next) {
//   console.log('-----------------------');
//   console.log('Time:', Date.now());
//   next();
// });

let access = {
    msg: '',
    state: true
}

app.use(function (req, res, next) {
    if (!access.state) {
        return next(new Error());
    }
    return next();
});

app.use('/hack', function (req, res, next) {
    console.log('hack');
    access.state = false;
    next(new Error());
});

app.use(function (req, res, next) {
    console.log('standart');
    next();
});

app.use(function (error, req, res, next) {
    console.log('error');
    next();
});

// app.get('/foo', function (req, res, next) {
//     console.log('Request Type:', req.method);
    
//     // res.send('hello /foo');
//     next();
// });

// app.get('/foo', function (req, res, next) {
//     console.log('second Request Type:', req.method);

//     // res.send('foo');
//     next();
// });

// app.use(function (req, res, next) {
//     console.log('next');

//     next();
// });

app.listen(port);


console.log('Mock server listening on port ' + port);