const { Telegraf } = require('telegraf');

/**
 * How to get the secret token for createing a bot 
 * -> open telegram and search for botfather
 * -> to read instruction type /start and press enter
 * ->to create a new bot type /newbot and press enter
 * -> it will ask for a bot name without a slash ex: ashutosh_bot
 * -> it will ask for a username ending with bot ex ashtrikbot
 * //http://t.me/Ashtrikbot
 */
const bot = new Telegraf('6993523418:AAHSc-QYszocEajsOntIuvjdGdg6tQ1HCHo');

bot.start((ctx) => ctx.reply('Welcome To Ashtosh bot'));

bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();