var express = require('express');
var app = express();
var Poet = require('poet');
var path = require('path');

var poet = Poet(app, {
  postPerPage: 5,
  posts: __dirname + '/_posts',
  metaFormat: 'json',
});

poet.watch()
poet.init(app, function(){});

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views', 'index.html'));
});

var port = process.env.PORT || 3000;
//http.listen(port, ( => console.log('listening on port' + port) ))
app.listen(port, function (){
  console.log('Blog Is Live.')
})
