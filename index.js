/**
 * @fileoverview twitter mini apps
 * @name index.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var express = require('express');
var route = express.Router();
var oa = require('./routes/oauth');
var twitter = require('./routes/twitter');

//oauth middleware
route.use(oa.requestToken());
route.use(oa.accessToken());

route.get('/', function(req, res) {
    return res.send('OK');
});
route.get('/timeline', twitter.timeline());

module.exports = route;
