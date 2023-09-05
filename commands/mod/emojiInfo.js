module.exports = {
  name: "emoji info",
  aliases: ["emote info", "emoji-info"],
  usage: "{prefix} emoji info :emoji:",
  description: "Gives information about an emoji.",
  code:`
  
$djsEval[ const emo = '$get[emoji]'.replace('>', '')
const emoji = client.emojis.cache.get(emo)
const { EmbedBuilder } = require('discord.js')
if ( emoji ) { 
const embed = new EmbedBuilder()
.setTitle('Emoji Info')
.setColor('0000FF')
.setThumbnail(\`https://cdn.discordapp.com/emojis/\${emoji.id}.\${emoji.animated?'gif':'png'}\`)
.addFields({name: 'Name', value: \`\${emoji.name}\`},
{name: 'ID', value: \`\\\`\${emoji.id}\\\`\`},
{name: 'Animated?', value: \`\${emoji.animated}\`},
{name: 'Guild', value:\`\${emoji.guild.name} (\\\`\${emoji.guild.id}\\\`)\`},
{name:'URL', value: \`[\${emoji.name}](https://cdn.discordapp.com/emojis/\${emoji.id}.\${emoji.animated?'gif':'png'})\`},
{name: 'Added on', value: '<t:'+Math.floor(client.emojis.cache.get(emo).createdAt.getTime()/1000)+':f>'})

channel.send({embeds: [embed]})
} else {
const em = new EmbedBuilder()
.setColor(0xFF0000)
.setDescription('Invalid Emoji or could not get the emoji from cache. Please use a valid one.')
channel.send({ embeds: [em] })
}
;false]

$let[emoji;$advancedTextSplit[$message[1];:;3]]

$onlyIf[$message[1]!=;{newEmbed:{description:Pleas}}]

$suppressErrors[Something went wrong!]
  `
}
