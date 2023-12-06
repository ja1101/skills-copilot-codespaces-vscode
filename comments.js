// create web server
// 1. load modules
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
// 2. configure app
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));
// 3. define routes
// 3.1. GET
app.get('/', function (req, res) {
    res.send('Hello World');
});

