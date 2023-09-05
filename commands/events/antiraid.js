module.exports = [{
  channel: "$getGuildVar[modlogs]",
  type: "channelDelete",
  code: `
$if[$getUserVar[raidspam;$getAuditLogs[$guildID;$authorID;1;12;{executor.id}]]>=2]
$description[raid detected
User: $getAuditLogs[$guildID;$authorID;1;12;{executor.mention}]]
$color[#35185a]
$else
 
$endif

$setUserVar[raidspam;$math[$getUserVar[raidspam;$getAuditLogs[$guildID;$authorID;1;12;{executor.id}]]+1]$getAuditLogs[$guildID;$authorID;1;12;{executor.id}]]
$onlyIf[$isBot[$getAuditLogs[$guildID;$authorID;1;12;{executor.id}]]!=false;]
$onlyIf[$getGuildVar[antiraid]!=off;]
`
}]