module.exports = {
    name:"reload",
    aliases: "update",
    code:`
    $title[1;Reloaded Successfully]
    $description[1;
    **New Commands Count:** $get[new] command(s)\n
    **Reloaded:** $commandsCount command(s)
    ]
    $color[1;#E6E6FA]
    $footer[1;$guildname]
    $thumbnail[1;$userAvatar[$clientID]]
    $addTimeStamp[1]
    $channelSendMessage[$channelID;**Reloading Commands...**{deleteIn:0.6s}]
    $let[new;$math[$get[after]-$get[before]]]
    $let[after;$commandsCount]
    $updateCommands
    $let[before;$commandsCount]
    $onlyForIDs[964024743172915220;Not owner]
    ` 
    }