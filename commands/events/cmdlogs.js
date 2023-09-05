module.exports = [{
  name: "$getGuildVar[prefix]",
  nonPrefixed: true,
  code: `
$addTimestamp
$footer[Cmd Logs]
$color[#35185a]
$thumbnail[$userAvatar[$authorID]]
$description[**User:** \`$username[$authorID]\`
**User ID:** \`$authorID\`
**Command:** \`$message\`
**Guild Name:** \`$guildName[$guildID]\`
**Guild ID:** \`$guildID\`]
$title[Command Logs;$messageURL[$messageID;$channelID]]
$useChannel[1095523438480859227]
`
}]