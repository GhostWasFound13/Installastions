module.exports = [{
    name: "role remove",
    description: "Removes a specified role from the given user.",
    category: "moderation",
    usage: "{prefix} role remove @user @role",
    code: `
$sendMessage[{newEmbed:{description:<@&$get[role]> has been removed from <@$get[user]>}{timestamp}{color:Green}{footer:Moderator#COLON# $username:$authorAvatar}}]
    
$removeRole[$guildID;$get[user];$get[role];Role removed by $username]
    
    
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<=$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description: Given user has higher role than you.}{color:Red}}]
    
$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$get[role]];{newEmbed:{description:The role you wanna me to remove has higher position than my highest role.}{color:Red}}]
    
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$get[role]];{newEmbed:{description:The role you wanna me to remove has higher position than you.}{color:Red}}]
    
$onlyIf[$hasRoles[$guildID;$get[user];$get[role]]==true;{newEmbed:{description:The user does not have the given role.}{color:Red}}]
    
$onlyIf[$isRoleManaged[$get[role]]==false;{newEmbed:{description:The role given is managed. You cannot remove this role.}{color:Red}}]


$onlyIf[$get[role]!=;{newEmbed:{description:Please mention or provide id of the role you want to be removed from the given user.}{color:Red}}]

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you wanna remove roles from.}{color:Red}}]
    
$onlyIf[$memberExists[$get[user]]==true;{newEmbed:{description:The entered user doesn't exists within the server}{color:Red}}]
    
$onlyIf[$roleExists[$get[role]]==true;{newEmbed:{description:The entered role doesn't exists within the server}{color:Red}}]
    
$onlyIf[$hasPerms[$guildID;$clientID;manageroles]==true;I do not have \`MANAGE_ROLES\` permission.]
    
$onlyPerms[manageroles;You do not have \`MANAGE_ROLES\` permission.]
    
$let[role;$findRole[$message[3]]]
    
$let[user;$findMember[$message[2];false]]
    
$suppressErrors[Something went wrong!]
      `
}]