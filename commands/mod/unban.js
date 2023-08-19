module.exports = [{
    name: "unban",
    aliases: ["UNBAN", "Unban"],
    code: `
    $unban[$guildID;$findUser[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]
    $sendMessage[<@$findUser[$message[1];false]> has been **unbanned.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

    $onlyIf[$isBanned[$guildID;$findMember[$message[1];false;$guildID]]==true;{newEmbed:{description:Process cancelled.\n**Reason:** User not on the banlist. Please cross check the ID.}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]
    $onlyPerms[banmembers;Uh oh... You do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$findMember[$message[1];false]!=$authorID;Do not try to do awkward things like unbanning yourself.{extraOptions:{delete:5s}}]
    $onlyIf[$message[1]!=;The syntax is \`unban [user id] (reason)\`.{extraOptions:{delete:5s}}]
    `
}]