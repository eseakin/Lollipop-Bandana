'use strict';

const express = require('express');
const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.config');
const config = require('../../config');
const main = require('../main');

let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

const paths = config.utils_paths;
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const paths = config.utils_paths;

main.app.post('/api/search', (req, res) => {
  var results = 'result';
  console.log('post received to api/search', req.body);
  res.send(req.body.name);
});

module.exports = search;
