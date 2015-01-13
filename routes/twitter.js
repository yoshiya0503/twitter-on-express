/**
 * @fileoverview twitter controller
 * @name twitter.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var twitter = require('../lib/twitter');

/**
 * get timeline
 * @method timeline
 * @param {Object} req
 * @param {Object} res
 */
exports.timeline = function() {
    return function(req, res) {
        var token = req.session.twitter.access_token;
        var secret = req.session.twitter.access_secret;
        twitter.getTL(token, secret, function(err, result) {
            if (err) {
                return res.send(err);
            }
            return res.send(result);
        });
    };
};
