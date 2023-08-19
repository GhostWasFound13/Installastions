module.exports = [{
    name: "role add",
    name: "role",
    description: "Adds a specified role to the given user.",
    category: "moderation",
    usage: "{prefix} role add @user @role",
    code: `
$sendMessage[{newEmbed:{description:<@&$get[role]> has been added to <@$get[user]>}{timestamp}{color:Green}{footer:Moderator#COLON# $username:$authorAvatar}}]
    
$giveRole[$guildID;$get[user];$get[role];Role given by $username]
    
    
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<=$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description: Given user has higher role than you.}{color:Red}}]
    
$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$get[role]];{newEmbed:{description:The role you wanna me to assign has higher position than my highest role.}{color:Red}}]
    
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$get[role]];{newEmbed:{description:The role you wanna me to assign has higher position than you.}{color:Red}}]
    
$onlyIf[$hasRoles[$guildID;$get[user];$get[role]]==false;{newEmbed:{description:The user already has the given role.}{color:Red}}]
    
$onlyIf[$isRoleManaged[$get[role]]==false;{newEmbed:{description:The role given is managed. You cannot add this role to anyone}{color:Red}}]


$onlyIf[$get[role]!=;{newEmbed:{description:Please mention or provide id of the role you want to be added to the given user.}{color:Red}}]

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you wanna add roles to.}{color:Red}}]
    
$onlyIf[$memberExists[$get[user]]==true;{newEmbed:{description:The entered user doesn't exists within the server}{color:Red}}]
    
$onlyIf[$roleExists[$get[role]]==true;{newEmbed:{description:The entered role doesn't exists within the server}{color:Red}}]
    
$onlyIf[$hasPerms[$guildID;$clientID;manageroles]==true;I do not have \`MANAGE_ROLES\` permission.]
    
$onlyPerms[manageroles;You do not have \`MANAGE_ROLES\` permission.]
    
$let[role;$findRole[$message[3]]]
    
$let[user;$findMember[$message[2];false]]
    
$suppressErrors[Something went wrong!]
`
}]
