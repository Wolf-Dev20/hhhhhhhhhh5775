const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setImage('')
    .setDescription(`

 ≪ Prefix Bot , ≫

      <a:emoji_11:814035817253175316> command music <a:emoji_11:814035817253175316>

 <a:emoji_7:814035064635129907> ,loop 
 <a:emoji_7:814035064635129907> ,lyrics              
 <a:emoji_7:814035064635129907> ,pause
 <a:emoji_7:814035064635129907> ,play                   
 <a:emoji_7:814035064635129907> ,queue
 <a:emoji_7:814035064635129907> ,radio                 
 <a:emoji_7:814035064635129907> ,remove
 <a:emoji_7:814035064635129907> ,resume             
 <a:emoji_7:814035064635129907> ,search
 <a:emoji_7:814035064635129907> ,shuffle              
 <a:emoji_7:814035064635129907> ,skip
 <a:emoji_7:814035064635129907> ,skipto               
 <a:emoji_7:814035064635129907> ,stop
 <a:emoji_7:814035064635129907> ,volume

      <a:emoji_7:814035032704155728> Filter Commands <a:emoji_7:814035032704155728>
 <a:emoji_10:814035106293088267> ,fi 8D
 <a:emoji_10:814035106293088267> ,fi tremolo
 <a:emoji_10:814035106293088267> ,fi vibrato
 <a:emoji_10:814035106293088267> ,fi pulsator
 <a:emoji_10:814035106293088267> ,fi clear
 <a:emoji_10:814035106293088267> ,fi bassboost
 <a:emoji_10:814035106293088267> ,fi vaporwave

      <a:emoji_13:814037864479981578> Others <a:emoji_13:814037864479981578>
 <a:emoji_8:814035085400735755> ,help              <a:emoji_8:814035085400735755> ,ping
 <a:emoji_8:814035085400735755> ,prefix             <a:emoji_8:814035085400735755> ,uptime

[support](https://discord.gg/QnUnndky3E)    -    [invite](https://discord.com/oauth2/authorize?client_id=812368564610793523&permissions=70282305&scope=bot)

`)

  
   .setColor("BLUE");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_11:814035839956418570>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
