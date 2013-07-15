var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var textinfo = new Buffer(32);

fs.readFile('index.html','utf8', function(err, data) {
    if (err) { console.log(err); }
    console.log(data);
    textinfo.write(data,'utf-8');
});


app.get('/', function(request, response) {
  response.send(textinfo.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
