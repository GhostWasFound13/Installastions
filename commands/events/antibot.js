module.exports = [{
  channel: "$getGuildVar[modlogs]",
  type: "join",
  code: `$kick[$authorID;$guildID;Anti-bot system]
$title[⚠️ Anti bot detected ⚠️]
$description[We detected another bot joining this guild.

>>> **Target:** \`$username[$authorID] ($authorID)\`
**Reason:** \`Anti-bot system\`
**Action:** \`$getGuildVar[action]\`]
$footer[$guildName[$guildID]]
$thumbnail[$userAvatar[$authorID]]
$color[#35185a]
$addTimestamp

$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getGuildVar[antibot]!=off;] 
`
}]
