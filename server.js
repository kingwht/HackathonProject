var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
// Our first route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Listen to port 5000
app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});
