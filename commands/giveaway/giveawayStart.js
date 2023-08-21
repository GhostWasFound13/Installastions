module.exports ={
  name: "giveaway start",
  aliases: "gws",
  category: "giveaway",
  usage: "{prefix}giveaway start 12h 3 Merchandise",
  code:`


  

$writeFile[$get[path];$getObject;utf8]
$addObjectProperty[a$guildID_$get[id];{"author": "$authorID", "users": "$clientID", "prize": "$messageSlice[2]", "winners": "$message[2]", "time": "$truncate[$math[($dateStamp+$parseTime[$message[1]])/1000]]", "url": "$guildID/$channelID/$get[id]", "timeoutId": "$get[timeoutId]"}]
$createObject[$nonEscape[$get[data]]]
$let[data;$readFile[$get[path]]]
$let[path;./giveaways.sql]
 
 $let[timeoutId;$setTimeout[giveawayEnd;$message[1];{"channel": "$channelID", "message": "$get[id]", "guild": "$guildID"};true]]


$let[id;$sendMessage[{newEmbed:{title:$messageSlice[2]}
{description:Click 🎉 button to participate!\n\nEnds#COLON# <t#COLON#$truncate[$math[($dateStamp+$parseTime[$message[1]])/1000]]#COLON#R>
Entries#COLON# **0**
Winner(s)#COLON# Pending!
Hosted by#COLON# <@$authorID>}
{footer:$message[2] winner(s) to be choosen | $parseDate[$math[$dateStamp+$parseTime[$message[1]]];date]}
{color:Aqua}}{actionRow:{button::2:giveawayJoin.$authorID:false:🎉}};true]]



$onlyIf[$parseTime[$message[1]]!=-1;Invalid time provided.]
  
  
  `
}
// $onlyIf[$parseTime[$message[1]]>=60000;Time cannot be less than 1 minute]