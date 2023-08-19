module.exports = [{
    name: "ban",
    aliases: ["BAN", "Ban"],
    code: `

$ban[$guildID;$findMember[$message[1];false];7;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]
$sendMessage[<@$replaceText[$replaceText[$findMember[$message[1];false];<@;];>;]> has been **banned.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

$onlyPerms[banmembers;Uh oh...You do not have \`BAN_MEMBERS\` permission to use this command.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than you.{extraOptions:{delete:5s}}]
$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like banning yourself.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`ban [mention/user ID] (reason) \`]`
}]