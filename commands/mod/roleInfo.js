module.exports = [{
    name: "role info",
    description: "Gives information about a role.",
    usage: "{prefix} role info @role",
    category: "moderation",
    code: `

$sendMessage[{newEmbed:{title:Role info}{description:**Name#COLON#** $roleName[$get[role]] (<@&$get[role]>)\n**Color#COLON#** $get[color]\n**Members Count#COLON#** $roleMembersCount[$get[role]]\n**Created on#COLON#** <t:$truncate[$divide[$creationDate[$get[role];ms];1000]]:f>\n**Position#COLON#** $rolePosition[$get[role]]\n**Hoisted?** $toLocaleUpperCase[$isHoisted[$get[role]]]\n**Editable?** $toLocaleUpperCase[$isRoleEditable[$get[role]]]}{footer:ID#COLON# $get[role]}{color:$get[color]}}]

$onlyIf[$get[role]!=;{newEmbed:{description:Please mention or provide id of the role you want to be added to the given user.}{color:Red}}]

$onlyIf[$roleExists[$get[role]]==true;{newEmbed:{description:The entered role doesn't exists within the server.}{color:Red}}]

$let[color;$getRoleColor[$get[role]]]

$let[role;$findRole[$message[1]]]

$suppressErrors[Something went wrong!]

`
}]