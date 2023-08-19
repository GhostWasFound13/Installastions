module.exports = [{
    name: "dumpdata",
    code: `  $awaitMessages[$channelID;$authorID;15s;dumpdata;dumpdata;Time has ended] 
    $title[1;WARNING!!]
    $description[**Type "dumpdata" without the commas to see ALL the data the bot has stored of you this includes Roblox cookie (encrypted), Auth/Console key (encrypted), placeId, groupId, ranklock, adminrole and ranking perms role.**]
  $color[1;#FF0000]
  $onlyForIDs[964024743172915220;Not owner]`
},{
    name: "dumpdata",
    code: `
    $createFile[ Cookie: $getGuildVar[Cookie]\n
**Auth/Console Key:** $getGuildVar[auth]\n
**Salt:** $getGuildVar[salt]\n
**PlaceId:** $getGuildVar[placeId]\n
**GroupId:** $getGuildVar[ServerId]\n
**RankLock:** $getGuildVar[RankLimit]\n
**AdminRole:** <@&$getGuildVar[AdminRole]>\n
** RankPerms:** <@&$getGuildVar[RankPerms]>;dumpdata_$guildId.txt]`
}]