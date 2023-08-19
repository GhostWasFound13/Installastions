module.exports = {
  name: "unlock",
  description: "Unlocks a locked channel.",
  category: "moderation",
  usage: "{prefix}unlock #channel",
  code:`
  
  $sendMessage[$if[$channelID==$get[channel];;**channel unlocked <#$get[channel]>**]]
$channelSendMessage[$get[channel];**channel unlocked | \`$username[$authorID]\` |**]

$modifyChannelPerms[$get[channel];$guildID;+sendmessages]

$onlyIf[$hasPermsInChannel[$get[channel];$guildID;sendmessages]==false;**channel is already unlocked!**]

$let[channel;$findChannel[$message[1]]]
  
  
  `
}