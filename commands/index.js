module.exports = {
    //Bot-Support Commands
      test: require('./bot-support/test'),
      crash: require('./bot-support/crash'),
      ping: require('./bot-support/ping'),
      debug: require('./bot-support/debug'),
    //Moderation Command
      kick: require('./moderation/kick')
    };