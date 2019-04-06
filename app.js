//jshint esversion:6

const bodyParser = require('body-parser');
const ejs = require('ejs');
const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.listen(port, function(req, res){
  console.log('Server started on port: ' + port);
});

app.get('/', function(req, res){
  res.render('index.ejs');
});
