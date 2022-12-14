const {ETwitterStreamEvent} = require('twitter-api-v2');
const {rwClient} = require('./client.js');
const BotInteractions = require('./interactions');
const config = require('./config.json');

const rules = config.HASHTAGS
  .map(hashtag => {
    return {
      'value': `#${hashtag} -is:retweet`,
      'tag': `#${hashtag}`}
  })
  .concat(config.USERS.map(user => {
    return {
      'value': `from:${user} -is:retweet`,
      'tag': `@${user}`}
  }));

const deleteAllRules = async () => {
  try {
    const rules = (await rwClient.v2.streamRules()).data;
    if (rules) {
      const ids = rules.map(rule => rule.id);

      await rwClient.v2.updateStreamRules({delete: {ids}});
    }
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  try {
    await deleteAllRules();
    await rwClient.v2.updateStreamRules({add: rules});
    const newRules = (await rwClient.v2.streamRules()).data;
    const stream = await rwClient.v2.searchStream();

    console.log(`Connected with rules:${JSON.stringify(newRules.map(rule => rule.value))}`)
    stream.on(ETwitterStreamEvent.Data, async (data) => {
      const tweet = data.data;
      const matchingRule = data.matching_rules[0];

      // Avoid acting on replies that not include the hashtags themself
      if (matchingRule.tag[0] === '#' && !tweet.text.match(matchingRule.tag))
        return ;
      if (config.RETWEET) {
        await BotInteractions.retweet(tweet.id);
        console.log(`Tweet #${tweet.id} retweeted.`);
      }
      if (config.LIKE) {
        await BotInteractions.like(tweet.id);
        console.log(`Tweet #${tweet.id} liked.`);
      }
    });
    stream.on(ETwitterStreamEvent.DataKeepAlive, () => console.log('.. still up!'));
    stream.autoReconnect = true;
  } catch (e) {
    console.log(e);
  }
})();
