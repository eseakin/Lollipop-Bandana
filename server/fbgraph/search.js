'use strict';

const express = require('express');
const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.config');
const config = require('../../config');
const main = require('../main.js');

const paths = config.utils_paths;

main.app.post('/api/search', (req, res) => {
  var results = 'result';
  console.log('post received to api/search', req.data, res.data)
  res.send(results)
})

module.exports = search;
