module.exports = {
  //Bot-Support Commands
  test: require('./bot-support/test'),
  crash: require('./bot-support/crash'),
  ping: require('./bot-support/ping'),
  debug: require('./bot-support/debug'),
  changeuseractivity: require('./bot-support/change-user-activity'),
  //help command
  help: require('./help/index'),
  //Fun Command
  cursed: require('./fun/cursed'),
  meme: require('./fun/meme'),
  reddit: require('./fun/reddit'),
  ifunny: require('./fun/ifunny'),
  cursedcats: require('./fun/cursedcat'),
  water: require('./fun/water'),
  //She-ra
  catra: require('./She-ra/catra'),
  shera: require('./She-ra/she-ra'),
};