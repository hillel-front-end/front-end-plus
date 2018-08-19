let express = require('express');
let app = express();
let port = 3780;



// MEAN - MongoDb, Express.js, Angular, Node.js 
console.log(1);

app.use(function (req, res, next) {
  console.log('-----------------------');
  console.log('Time:', Date.now());
  next();
});

app.use(function (req, res, next) {
    console.log('next');
    next();
});

app.get('/foo', function (req, res, next) {
    console.log('Request Type:', req.method);
    
    // res.send('hello /foo');
    next();
});

app.get('/foo', function (req, res, next) {
    console.log('second Request Type:', req.method);

    // res.send('foo');
    next();
});

app.use(function (req, res, next) {
    console.log('next');

    next();
});

app.listen(port);


console.log('Mock server listening on port ' + port);