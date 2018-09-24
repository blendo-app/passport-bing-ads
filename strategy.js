var OAuth2Strategy = require('passport-oauth2').Strategy
  , util = require('util');


function Strategy(options, verify) {

    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://login.live.com/oauth20_authorize.srf';
    options.tokenURL = options.tokenURL || 'https://login.live.com/oauth20_token.srf';
    options.scope = options.scope || ['bingads.manage'];

    OAuth2Strategy.call(this, options, verify);

    this.name = 'bing_ads';
    // this._oauth2._useAuthorizationHeaderForGET = true;
    this._scope = options.scope
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;