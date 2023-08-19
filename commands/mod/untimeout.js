module.exports = [{
    name: "remove-timeout",
    aliases: ["removetimeout", "untimeout", "untt"],
    code: `
$removeTimeout[$guildID;$findMember[$message[1];false];$replaceText[$replaceText[$checkCondition[$message[1]==];true;No reason provided];false;$messageSlice[1]]]
$sendMessage[<@$findMember[$message[1];false]>'s timeout has been **removed**. Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];Uh oh...The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyPerms[moderatemembers;You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;Uh oh... I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$memberExists[$findMember[$message[1];false]]==true;The user is not in server.{extraOptions:{delete:5s}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;Do not try to do awkward things like untimeouting yourselves.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`remove-timeout [mention/user id] (reason)\`{extraOptions:{delete:5s}}]
$onlyIf[$isTimeout[$guildID;$findMember[$message[1];false]]==true;{newEmbed:{description: **Process cancelled!**\n\n**Reason:** The user isn't in the timeout list.}{timestamp}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}}]
`
}]
