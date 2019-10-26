var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('Listening on http://'+host+':'+port+'/');
});

