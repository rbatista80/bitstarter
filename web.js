var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var textinfo = new Buffer('');

fs.readFile('index.html','utf-8', function(err,data) {
    if (err) throw err;
    console.log(data);
    textinfo.write(data);
});



app.get('/', function(request, response) {
  response.send(textinfo);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
