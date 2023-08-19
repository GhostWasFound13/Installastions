module.exports = {
  name: "lock",
  description: "This will lock the specified channel.",
  category: "moderation",
  usage: "{prefix}lock #channel reason",
  code:`
  
  $sendMessage[$if[$channelID==$get[channel];;**channel locked <#$get[channel]>**]]
$channelSendMessage[$get[channel];**channel locked | \`$username[$authorID]\` |**]

$modifyChannelPerms[$get[channel];$guildID;-sendmessages]

$onlyIf[$hasPermsInChannel[$get[channel];$guildID;sendmessages]==true;**channel is already locked!**]

$let[channel;$findChannel[$message[1]]]
  
  
  `
}