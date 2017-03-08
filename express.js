var express = require('express')
var app = express()
 
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
var port = 8080;
app.listen(port, function(){ console.log('listening on port ' + port)});




