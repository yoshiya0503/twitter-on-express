/**
 * @fileoverview entory for apps
 * @name app.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

//setup middleware
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({resave: true, saveUninitialized: true, secret: 'yoshiya'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twitter', require('./index.js'));

app.listen(app.get('port'));
