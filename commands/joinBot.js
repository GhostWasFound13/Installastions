module.exports = {
  name: "join",
  type: "guildJoin",
  channel: "$channelID",
  code: `
  $author[1;$guildName[$guildID];$guildIcon[$guildID]]
  $title[<:icons_stagerequesttospeak:1123610843720986645> New Guild Joined!]
  $description[<:reply3:1124230185844224000> **Guild Name**: $guildName[$guildID]
<:reply2:1124230129497944145> **Guild ID**: \`$guildID\`
<:reply2:1124230129497944145> **Guild Members**: \`$membersCount[$guildID]\`
<:reply2:1124230129497944145> **Owner** : <@$ownerID[$guildID]> (\`$ownerID[$guildID]\`)
<:replyL:1124230183000494160> **Guild Link**: $getGuildInvite[$guildID]]
$footer[Thanks For Adding]
$color[$getVar[color]]`
}
