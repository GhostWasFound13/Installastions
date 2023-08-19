module.exports = {
    name: "unban",
    code: `$unban[$guildID;$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
   $description[1;> User has been unbanned]
   $color[1;Green]
   $argsCheck[1;Please Provide Use ID To Unban]
   $onlyPerms[banmembers;You need ban permission]
   $onlyClientPerms[banmembers;I don't have ban perms]
   $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
   $suppressErrors[{newEmbed: {title:Error}{description:Check if the user is already banned}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]
   `
   }