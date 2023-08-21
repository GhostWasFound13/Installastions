module.exports = [{
name: "voiceCount",
aliases: ["vcCount", "vcc"],
code: `
$reply

$forEachGuild[100;{"msg": "$sendMessage[Counting how many voice channels I'm in.;true]", "channelID": "$channelID", "guildid": "$guildid"};vcCountAWAITED;vcCountEndAWAITED]

$setGuildVar[vcCount;0;$guildid]
`
}, {
    name: "vcCountAWAITED",
    type: "awaited",
    $if: "old",
    code: `
    $setGuildVar[vcCount;$sum[$getGuildVar[vcCount;$awaitData[guildid]];1];$awaitData[guildid]]
    $onlyIf[$voiceID[$clientID]!=; ]
`
}, {
    name: "vcCountEndAWAITED",
    $if: "old",
    type: "awaited",
    channel: "1073754825705136238",
    code: `
$editMessage[$awaitData[msg];I'm on a total of $getGuildVar[vcCount;$awaitData[guildid]] voice channels.;$awaitData[channelID]]
`
}]
