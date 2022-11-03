# twitter-like-and-retweet
Automatically like and/or retweet desired twitter #HASHTAGS and/or Users.

# how to run

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


## F.A.Q
If you can listen to events but have errors msg when liking and/or retweeting, make sure that your app is registered with read AND write permissions!
![image](https://user-images.githubusercontent.com/105301169/198827588-be2ab5a0-8a66-4606-8d1a-e42dbd216bf5.png)
