var express = require('express');
var app = express();
var path = require('path');


app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views', 'index.html'));
});

var port = process.env.PORT || 3000;
//http.listen(port, ( => console.log('listening on port' + port) ))
app.listen(port, function (){
  console.log('Blog Is Live.')
})
