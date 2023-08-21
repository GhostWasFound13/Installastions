module.exports = [{
    name: "role info",
    description: "Gives information about a role.",
    usage: "{prefix} role info @role",
    category: "moderation",
    code: `

$sendMessage[{newEmbed:{title:Role info}{field:Name:\`$roleName[$get[role]]\`}
{field:Role Color:\`$get[color]\`}
{field:Created on:<t:$djsEval[Math.floor(d.guild.roles.cache.get('$get[role]').createdAt.getTime() /1000);true]:f>}{field:Position - Ascending:\`$rolePosition[$get[role]]\`}{field:Hoisted:\`$toLocaleUpperCase[$isHoisted[$get[role]]]\`}{field:Editable:\`$toLocaleUpperCase[$isRoleEditable[$get[role]]]\`}{field:Key Permissions:$if[$get[perms]==;Default;$get[perms]]}{footer:ID#COLON# $get[role]}{color:$get[color]}}]

$let[perms;\`$djsEval[ const c = d.guild.roles.cache.get('892980915121311764').permissions.toArray();
const e = ['KickMembers', 'BanMembers', 'Administrator', 'ManageChannels', 'ManageGuild', 'ViewAuditLog', 'MentionEveryone', 'ManageRoles'];

const filteredPermissions = c.filter(perm => e.includes(perm));

filteredPermissions.join('\`, \`');true]\`]

$onlyIf[$get[role]!=;{newEmbed:{description:Please mention or provide id of the role you want to be added to the given user.}{color:Red}}]

$onlyIf[$roleExists[$get[role]]==true;{newEmbed:{description:The entered role doesn't exists within the server.}{color:Red}}]

$let[color;$nonEscape[$getRoleColor[$get[role]]]]

$let[role;$findRole[$message[1]]]



`
}]
