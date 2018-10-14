var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

// app.use(cors())
app.use(express.static(__dirname + '/public'));

var corsOptions = {
    origin: 'https://currate.ru'
  }


app.get('/', cors(corsOptions), function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var port = process.env.PORT || 7272;

app.listen(port, function() {
    console.log("Listening on " + port);
});