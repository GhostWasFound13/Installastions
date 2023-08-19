module.exports = [{
    name: "timeout",
    aliases: ["tt", "tiout"],
    code: `
$sendMessage[<@$findMember[$message[1];false]> has been **timeouted.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]{newEmbed:{footer:Moderator#COLON# $username | Ends at:$userAvatar[$authorID]}{timestamp:$get[end]}}]
$let[end;$timeoutMember[$guildID;$findMember[$message[1];false];$message[2];true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]]] 

$onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
}]