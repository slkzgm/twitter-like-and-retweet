# twitter-like-and-retweet
Automatically like and/or retweet desired twitter #HASHTAGS.

# how to run:

1: Clone the repo and make sure to have Node installed

2: Move to the repo directory: `cd twitter-like-and-retweet`

3: Install dependencies: `npm install`

4: Create your .env file: `vim .env`:
```
TWITTER_APPKEY: "YOUR_KEY"
TWITTER_APPSECRET: "YOUR_SECRET"
TWITTER_ACCESSTOKEN: "ACCESS_TOKEN"
TWITTER_ACCESSSECRET: "ACCESS_SECRET"
TWITTER_BEARER: "YOUR_BEARER"
```

5: Edit the config.json file with your parameters:
```json
{
  "HASHTAGS": ["hashtag1", "hashtag2", "hashtag3"],
  "RETWEET": true
  "LIKE": false
}
```
set to true to enable auto like - retweet

6: run the bot: `node .` or `node index.js`
