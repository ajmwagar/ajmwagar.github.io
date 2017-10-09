var express = require('express');
var app = express();
var Poet = require('poet');
var path = require('path');

var poet = Poet(app, {
  posts: '/posts',
  postPerPage: 5,
  metaFormat: 'json',
});

poet.init().then(function (){
  //ready to go!
});


app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

var port = process.env.PORT || 3000;
//http.listen(port, ( => console.log('listening on port' + port) ))
app.listen(port, function (){
  console.log('Blog Is Live.')
})
