module.exports = {
    name: "channel info",
    usage: "{prefix} channel info #channel",
    category: "moderation",
    usage: "Gives information about a channel.",
    code: `
$title[Channel Info]
$color[Random]
$addField[Created on;<t:$djsEval[Math.floor(message.guild.channels.cache.get('$get[channel]').createdAt.getTime() /1000);true]:f>]
$addField[Category;$if[$get[id]==;No category;$channelName[$if[$get[id]==;$channelID;$get[id]]]]
$let[id;$channelCategoryID[$get[channel]]]]
$addField[Manageable?;$toLocaleUpperCase[$isChannelManageable[$get[channel]]]]
$addField[NSFW?;$toLocaleUpperCase[$channelNSFW[$get[channel]]]]
$addField[Type;$channelType[$get[channel]]]
$addField[ID;$get[channel]]
$addField[Name;$channelName[$get[channel]]]

$onlyIf[$channelType[$get[channel]]!=category;{newEmbed:{title:Channel Info}{field:Name:$channelName[$get[channel]]}{field:ID:$get[channel]}{field:Type:$channelType[$get[channel]]}{field:Manageable?:$toLocaleUpperCase[$isChannelManageable[$get[channel]]]}{field:Created on:<t:$djsEval[Math.floor(message.guild.channels.cache.get('$get[channel]').createdAt.getTime() /1000);true]:f>}{color:Random}}]

$onlyIf[$channelExists[$get[channel]]==true;{newEmbed:{description:The channel doesn't exist in the server.}{color:Red}}]

$onlyIf[$get[channel]!=;{newEmbed:{description:Enter a valid channel!}{color:Red}}]

$let[channel;$findChannel[$message[1];false]]
`
}