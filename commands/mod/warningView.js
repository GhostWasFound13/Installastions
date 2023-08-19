module.exports ={
  name: "case view",
  description: "Gives more information about a specific warning.",
  category: "moderation",
  usage: "{prefix}case view #id",
  code:`
  
$color[Green]
$author[$username[$getObjectProperty[$get[id].user]]'s warning;$userAvatar[$getObjectProperty[$get[id].user]]]
$description[**#$get[id]**
**Moderator:** $username[$getObjectProperty[$get[id].moderator]] \`$getObjectProperty[$get[id].moderator]\`
**Reason:** $getObjectProperty[$get[id].reason]
**Time:** <t:$truncate[$math[$getObjectProperty[$get[id].time]/1000]]:R>]

$onlyIf[$getObjectProperty[$get[id]]!=undefined;{newEmbed:{description:No warn registered with that id.}{color:Red}}]


$let[id;$replaceText[$message[1];#;]]




$createObject[$getGuildVar[cases]]
  `
}
// Add manage server permission there