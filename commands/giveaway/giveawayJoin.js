// this will holds every aspect ie
// extra entries, bans, request etc etc,

module.exports ={
  type: "interaction",
  prototype: "button",
  code:`

$interactionUpdate[;{newEmbed:{title:$getEmbed[$channelID;$messageID;1;title]}{color:Aqua}{footer:$getEmbed[$channelID;$messageID;1;footertext]}
{description:$splitText[1]**$math[$splitText[2]+1]**$splitText[3]}};{actionRow:{button::2:giveawayJoin.$authorID:false:🎉}}]

$textSplit[$getEmbed[$channelID;$messageID;1;description];**]

  $writeFile[$get[path];$getObject;utf8]

  $addObjectProperty[a$guildID_$messageID;{"author": "$getObjectProperty[a$guildID_$messageID.author]", "users": "$getObjectProperty[a$guildID_$messageID.users]|$authorID","prize":"$getObjectProperty[a$guildID_$messageID.prize]", "winners": "$getObjectProperty[a$guildID_$messageID.winners]", "time": "$getObjectProperty[a$guildID_$messageID.time]", "url": "$getObjectProperty[a$guildID_$messageID.url]", "timeoutId": "$getObjectProperty[a$guildID_$messageID.timeoutId]"}]

  $onlyIf[$checkContains[$getObjectProperty[a$guildID_$messageID.users];$authorID]==false;You are already in the giveaway!{actionRow:{button:Leave Giveaway:4:giveawayLeave.$messageID:false}}{extraOptions:{interaction:true}}{options:{ephemeral:true}}]

  $createObject[$nonEscape[$get[data]]]

  $let[data;$readFile[$get[path]]]
  
  $let[path;./giveaways.sql]

 $onlyIf[$splitText[1]==giveawayJoin]
  $textSplit[$interactionData[customId];.]
  `
}