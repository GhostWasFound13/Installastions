module.exports = {
  name: "warn",
  description: "Warns a user in the guild.",
  category: "moderation",
  usage: "{prefix}warn @user reason",
  code:`

$description[$username[$get[user]] has been warned.]
$color[Green]

$setGuildVar[cases;$getObject]
$addObjectProperty[c$toLowercase[$randomString[3]];$nonEscape[$get[case]]]
$createObject[$getGuildVar[cases]]

$setUserVar[cases;$getObject;$get[user]]
$addObjectProperty[c$toLowercase[$randomString[3]];$nonEscape[$get[case]]]
$createObject[$getUserVar[cases;$get[user]]]

$let[case;{"moderator": "$authorID", "user": "$get[user]", "reason": "$messageSlice[1]", "time": "$dateStamp"}]

$setGuildVar[warn;$math[$getGuildVar[warn]+1]]
$setUserVar[warn;$math[$getUserVar[warn;$get[user]]+1];$get[user]]


$onlyIf[$rolePosition[$userHighestRole[$authorId;$guildID;id]]<$rolePosition[$userHighestRole[$get[user];$guildID;id]];{newEmbed:{description:Given user has higher position than you. Cannot warn!}{color:Red}}]

$onlyIf[$authorID!=$get[user];{newEmbed:{description:You cannot warn yourself.}{color:Red}}]

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you want to warn.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;manageguild]==true;{newEmbed:{description:You need \`Manager Server\` permission to do so.}{color:Red}}]

$let[user;$findMember[$message[1];false]]
  
`
}