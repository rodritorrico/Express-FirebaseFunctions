const functions = require('firebase-functions');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('The best app!');
});

exports.app = functions.https.onRequest(app);