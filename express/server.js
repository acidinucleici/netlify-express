'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

 app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });

module.exports = app;
module.exports.handler = serverless(app);
