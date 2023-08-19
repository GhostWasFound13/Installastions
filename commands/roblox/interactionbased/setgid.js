module.exports = {
    name: "setgroupid",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description: **Group ID has been set!**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $setGuildVar[ServerId;$message[1]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
    $suppressErrors[
        {newEmbed: 
          {title:Error}
          {description:There shouldn't be an error but oh well}
          {footer: if this error continues feel free to contact a dev}
          {color:E6E6FA}
        }
        {options:
          {ephemeral}
        }
        {extraOptions:
          {interaction}
        }
        ]

    `
}