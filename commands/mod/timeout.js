module.exports = [{
    name: "timeout",
    code: `
                $timeoutMember[$guildID;$findUser[$mentioned[1;false];false];$getVar[timeouttime];false]
                    $title[Timeout]
                        $description[
                                    User: <@$findUser[$mentioned[1;false];false]>

                                            Mod: <@$authorID>

                                                    Reason: $noMentionMessage

                        ]
                            $color[$getVar[color]]
                            $onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`

}, {
    name: "timeout-adcanced",
    code: `
$setUserVar[reason;$noMentionMessage]
$setUserVar[tm;$findUser[$mentioned[1;false];false];$authorID]
$addButton[1;1 day;success;1d;false;⏲️]
$addButton[1;30 min;success;30m;false;⏳]
$addButton[1;10 min;success;10m;false;⌛]
$title[Timeout]
$description[
    Select A Option For Time Out User: <@$findUser[$mentioned[1;false];false]>
]
$color[$getVar[color]]

        $onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
},
{
    name: "10m",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];10m;false]


$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 10Min
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]
$onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`


},
{
    name: "30m",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];30m;false]

$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 30Min
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]

$onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
},
{
    name: "1d",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];24h;false]


$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 1Day
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]

$color[$getVar[color]]
$onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
}]

