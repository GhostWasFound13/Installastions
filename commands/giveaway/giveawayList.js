module.exports = {
  name: "giveaway list",
  category: "giveaway",
  usage: "{prefix}giveaway list",
  code:`
  
$color[Aqua]
$author[All running giveaways of this server]
$title[Total Giveaways: $getObjectProperty[count]]
$description[$nonEscape[$getObjectProperty[lists]]]

$createObject[$djsEval[
const to = 0; const from = 5
const data = $nonEscape[$get[data]]
let k = Object.keys(data).filter((key) => key.includes(\`\${message.guild.id}\`))
let keys = k.slice(to, from)
let text = "";
for ( i = 0; i < keys.length; i++){
entries = (data[keys[i]].users).split('|').length - 1
text += \`**#[\${data[keys[i]].prize}](https://discord.com/channels/\${data[keys[i]].url})** - <@\${data[keys[i]].author}>\nEntries: \${entries} | Ends: <t:\${data[keys[i]].time}:R>\n\n\`
}
s = {
lists: text, count: k.length
}
JSON.stringify(s);true]]




$let[data;$readFile[$get[path]]]
  
$let[path;./giveaways.sql]

`
}