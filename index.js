'use strict';

var envvar = require('envvar');
var express = require('express');
var bodyParser = require('body-parser');
var request = require("request");
var http = require('http');
var port = process.env.PORT || 3001;


var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require('./routes/axeharsha')(app);

app.get('/', function(request, response, next) {
  console.log("app loading...");
  response.render('index1');
  console.log("app loaded");
});



// app.get('/axe', (req, res, next) => {
//   console.log("im here inside the axe get");
// request({
// url: url,
// json: true
// }, function (error, response, body) {
// if (!error && response.statusCode === 200) {
//   //var results = JSON.parse(body);
//   var results = body;
//   res.render('index.ejs',
//   {
//    tagline: 'EJS Demo'
//   });
//   console.log(results) // Print the json response
// }
// })
// });

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
  });
  