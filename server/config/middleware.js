'use strict' 
const parseurl = require('parseurl');

module.exports = {
  morgan: require('morgan'),
  express: require('express'),
  session: require('express-session'),
  router: require('express').Router,
  bodyParser: require('body-parser'),
  chalk: require('chalk'),
  urls: require('./urls.js'),
  request: require('request'),
  path: require('path'),
  sessionPageViews(req, res, next) {
    let views = req.session.views;
    if(!views) 
      views = req.session.views = {};
    let pathname = parseurl(req).pathname;
    views[pathname] = (views[pathname] || 0) + 1;
    next();
  }
}