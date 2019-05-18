const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`bot hazır ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
  }
});

client.login(process.env.BOT_TOKEN);
