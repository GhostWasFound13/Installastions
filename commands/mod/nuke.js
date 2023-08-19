module.exports = ({
 name:"nuke",
 code:`$sendDM[{newEmbed:
{description:Channel nuked successfully ✅}
{color:Red}};$authorID;false]
 $deleteChannels[$channelID]
$cloneChannel[$channelID;$channelName[$channelID]]
$onlyPerms[administrator;**You can't use this command!**]
$onlyClientPerms[administrator;I don't have enough permissions for this] 
$color[FDFEFE]

`
}) 
