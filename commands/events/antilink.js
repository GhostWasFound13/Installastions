module.exports = [{
  name: "$alwaysExecute",
  code: `
$onlyIf[$isValidLink[$message]==true;{newEmbed:
{description:Sorry $username, you are not suppoed to post links on this server, it is strictly prohibited.}
{color:#35185a}}]
$deleteCommand]

$onlyIf[$checkCondition[$ownerID==$ownerID]!=true;]
$onlyIf[$checkContains[$message;https#COLON#//;http#COLON#//]==true;]
$onlyIf[$hasAnyPerm[$guildID;$authorID;administrator;managemessages;managechannels;manageguild;embedlinks]==false;]
$onlyif[$getGuildVar[antilink]==on]
`
}]