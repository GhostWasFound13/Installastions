module.exports ={
  type: "interaction",
  prototype: "button",
  code:`

$editMessage[$get[id];{newEmbed:{title:$getEmbed[$channelID;$get[id];1;title]}{color:Aqua}{footer:$getEmbed[$channelID;$get[id];1;footertext]}
{description:$splitText[1]**$math[$splitText[2]-1]**$splitText[3]}}{actionRow:{button::2:giveawayJoin.$authorID:false:🎉}};$channelId]


$interactionUpdate[Successfully left the giveaway!]

$textSplit[$getEmbed[$channelID;$get[id];1;description];**]

  $writeFile[$get[path];$getObject;utf8]

  $addObjectProperty[a$guildID_$get[id];{"author": "$getObjectProperty[a$guildID_$get[id].author]", "users": "$replaceText[$getObjectProperty[a$guildID_$get[id].users];|$authorID;]","prize":"$getObjectProperty[a$guildID_$get[id].prize]", "winners": "$getObjectProperty[a$guildID_$get[id].winners]", "time": "$getObjectProperty[a$guildID_$get[id].time]", "url": "$getObjectProperty[a$guildID_$get[id].url]"}]
  $createObject[$nonEscape[$get[data]]]

  $let[data;$readFile[$get[path]]]
  
  $let[path;./giveaways.sql]
 $let[id;$splitText[2]]

 $onlyIf[$splitText[1]==giveawayLeave]
  $textSplit[$interactionData[customId];.]
  `
}