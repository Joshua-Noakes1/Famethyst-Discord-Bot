module.exports = {
  //Bot-Support Commands
  test: require('./bot-support/test'),
  crash: require('./bot-support/crash'),
  ping: require('./bot-support/ping'),
  debug: require('./bot-support/debug'),
  //help command
  help: require('./help/index'),
  //Moderation Command
  kick: require('./moderation/kick'),
  ban: require('./moderation/ban'),
  mute: require('./moderation/mute'),
  unmute: require('./moderation/unmute'),
  //Fun Command
  cursed: require('./fun/cursed'),
  meme: require('./fun/meme'),
  reddit: require('./fun/reddit'),
  isearch: require('./fun/isearch'),
  ifunny: require('./fun/ifunny'),
  cursedcats: require('./fun/cursedcat'),
};