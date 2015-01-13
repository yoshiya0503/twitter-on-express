/**
 * @fileoverview oauth middleware
 * @name oauth.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var config = require('../config');
var twitter = require('../lib/twitter');

/**
 * oauth middleware for express
 * @method requestToken
 */
exports.requestToken = function() {
    return function(req, res, next) {

        if (req.session.twitter) {
            return next();
        }

        //create OAuth instance
        var oa = twitter.createOAuth();
        // create auth token
        oa.getOAuthRequestToken(function(err, oauth_token, oauth_secret) {
            if (err) {
                return next(err);
            }
            req.session.twitter = {
                token: oauth_token,
                token_secret: oauth_secret
            };
            //get auth
            return res.redirect(config.twitter.oauth_url + '?oauth_token=' + oauth_token);
        });
    };
};

/**
 * get access token
 * @method accessToken
 */
exports.accessToken = function() {
    return function(req, res, next) {

        if (req.session.twitter.access_token) {
            return next();
        }

        var oa = twitter.createOAuth();
        var oauth_token = req.session.twitter.token;
        var token_secret = req.session.twitter.token_secret;
        var verifier = req.query.oauth_verifier;

        oa.getOAuthAccessToken(oauth_token, token_secret, verifier, function(err, access_token, access_secret) {
            if (err) {
                return next(err);
            }

            req.session.twitter.access_token = access_token;
            req.session.twitter.access_secret = access_secret;
            return next();

        });
    };
};
