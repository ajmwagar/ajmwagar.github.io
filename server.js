var express = require('express');
var app = express();
var path = require('path');
var Poet = require('poet');

var poet = Poet(app, {
  posts: '/_posts/',
  postsPerPage: 5,
  metaFormat: 'json'
});

poet.watch(function () {
      // watcher reloaded
    //
  }).init().then(function () {
      // Ready to go!
    //
  });



app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

var port = process.env.PORT || 3000;
//http.listen(port, ( => console.log('listening on port' + port) ))
app.listen(port, function (){
  console.log('Blog Is Live.')
})
