module.exports = [{
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
$resetUserVar[msgspam]
$wait[5s]
$setUserVar[msgspam;$sum[$getUserVar[msgspam;$authorID];1]]

$if[$getUserVar[msgspam;$authorID]>=7]
$timeoutMember[$guildID;$authorID;$getGuildVar[spamtime]m;false;spamming]
$sendMessage[{newEmbed:{description:<@$authorID> **has been auto timeout for \`$getGuildVar[spamtime]\` minutes.**
**reason:** \`Spamming\`}{color:#35185a}{thumbnail:$userAvatar[$authorID]}}]
$endif
$onlyIf[$hasAnyPerm[$guildID;$authorID;managemessages;managechannels;manageguild]==false;]
$onlyIf[$getGuildVar[antispam]==enable]
`
}]