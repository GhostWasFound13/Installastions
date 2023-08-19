module.exports = [{
    name: "kick",
    aliases: ["KICK", "Kick"],
    code: `
  $kick[$guildID;$findMember[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided.];false;$messageSlice[1]]]
  $sendMessage[<@$findMember[$message[1];false]> has been **kicked.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}

  $onlyPerms[kickmembers;{newEmbed{description:You do not have \`KICK_MEMBERS\` permission.}}{extraOptions:{delete:5s}}]

  $onlyIf[$hasPerms[$guildID;$clientID;kickmembers]==true;Uh..oh... I do not have \`KICK_MEMBERS\` permission.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];You can't kick the person that has higher role position than you.{extraOptions:{delete:5s}}]
  $onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like kicking yourself.{extraOptions:{delete:5s}}]
  $onlyIf[$message[1]!=;The syntax is \`kick [mention/user id] (reason)\`]
`
}];