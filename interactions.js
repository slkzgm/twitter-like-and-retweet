const {itRwClient} = require('./client.js');

const retweet = async (tweetId) => {
  try {
    const res = await itRwClient.v2.me();
    const botUserId = res.data.id;

    await itRwClient.v2.retweet(botUserId, tweetId);
  } catch (e) {
    console.log(e);
  }
};

const like = async (tweetId) => {
  try {
    const res = await itRwClient.v2.me();
    const botUserId = res.data.id;

    await itRwClient.v2.like(botUserId, tweetId);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  retweet,
  like
}
