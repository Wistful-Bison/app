const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(
  require('morgan')('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({extended: true}),
  // require('express-session')({ TO BE IMPLEMENTED L8Z
  //   secret: 'It\'s a SECRET', //https://www.youtube.com/watch?v=gMUEFZXkmDAw
  //   saveUninitialized: false,
  //   resave: true
  // }),
  express.static(`${__dirname}/../public`), 
  require('./resources/user/router.js')
  // ,
  // require('./resources/ticket/router.js'),
  // require('./resources/kb/router.js')
);

module.exports = app