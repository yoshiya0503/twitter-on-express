/**
 * @fileoverview config file for app
 * @name config.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
module.exports = {
    twitter: {
        request_token: "https://twitter.com/oauth/request_token",
        access_token: "https://twitter.com/oauth/access_token",
        consumer_key: 'R5dfn2b7uSxZjpbFafakeS4l1',
        consumer_secret: '62I0hVycre1jcj33flHG43C6KnQ3KYutcPyLKENQ73YAkaX2bz',
        url: 'https://api.twitter.com/',
        oauth_version: "1.0",
        callback_url: "http://localhost:3000/twitter", //TODO change for project
        hash: "HMAC-SHA1",
        //oauth_url:'https://twitter.com/oauth/authenticate',
        oauth_url:'https://twitter.com/oauth/authorize',
        url_TL: 'https://api.twitter.com/1.1/statuses/home_timeline.json',
        url_update: 'https://api.twitter.com/1.1/statuses/update.json',
        url_profile: 'https://api.twitter.com/1.1/users/show.json',
        url_setting: 'https://api.twitter.com/1.1/account/settings.json'
    }
};
