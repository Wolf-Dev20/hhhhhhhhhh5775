const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("RANDOM").setTitle("❤ Please Invite me: ").setDescription("https://discord.com/oauth2/authorize?client_id=812368564610793523&permissions=70282305&scope=bot")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/avatars/812368564610793523/f786f3ee5da6058602c1ca2440e3f5da.png?size=1024"));
  }
}
