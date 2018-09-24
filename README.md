# passport-bing-ads
Passport strategy for authenticating with Bing Ads using the OAuth 2.0 API.

## Installation

    npm i passport-bing-ads

## Usage

#### Configure Strategy

    passport.use(new BingAdsStrategy({
        clientID: BING_ADS_APP_ID,
        clientSecret: BING_ADS_APP_SECRET,
        callbackURL: "http://myapp.dev/bing_ads/callback"
      }, function(req, accessToken, refreshToken, profile, done) {
        // Verify callback.
      }
    ));

## License
[The MIT License](http://opensource.org/licenses/MIT)