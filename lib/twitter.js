/**
 * @fileoverview twitter lib
 * @name twitter.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var config = require('../config');
var OAuth = require('oauth').OAuth;
var async = require('async');
var mongoskin = require('mongoskin');

/**
 * create OAuth instance
 * @method createOAuth
 */
var createOAuth = exports.createOAuth = function() {
    return new OAuth(
        config.twitter.request_token,
        config.twitter.access_token,
        config.twitter.consumer_key,
        config.twitter.consumer_secret,
        config.twitter.oauth_version,
        config.twitter.callback_url,
        config.twitter.hash
    );
};

/**
 * TODO
 * save twitter access token in MongoDB
 * @method saveToken
 */
var saveToken = exports.saveToken = function() {
};

/**
 * get twitter profile
 * @method getTL
 * @param {String} token
 * @param {String} secret
 * @callback {Function} callback
 */
exports.getTL = function(token, secret, callback) {

    var oa = createOAuth();
    var setting;
    var profile;

    async.series([
        function(next) {
            var url = config.twitter.url_setting;
            oa.get(url, token, secret, function(err, result) {
                if (err) {
                    return next(err);
                }
                setting = JSON.parse(result);
                next();
            });
        },
        function(next) {
            var url = config.twitter.url_profile + '?screen_name=' + setting.screen_name;
            oa.get(url, token, secret, function(err, result) {
                if (err) {
                    return next(err);
                }
                profile = JSON.parse(result);
                next();
            });
        }
    ],
    function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, profile);
    });
};
