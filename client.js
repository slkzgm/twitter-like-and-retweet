require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const bearer = process.env.TWITTER_BEARER;
const oauth = {
  appKey: process.env.TWITTER_APPKEY,
  appSecret: process.env.TWITTER_APPSECRET,
  accessToken: process.env.TWITTER_ACCESSTOKEN,
  accessSecret: process.env.TWITTER_ACCESSSECRET
};

const client = new TwitterApi(bearer);

const rwClient = client.readWrite;

const itClient = new TwitterApi(oauth);

const itRwClient = itClient.readWrite;

module.exports = {
  rwClient,
  itRwClient
}
