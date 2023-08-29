module.exports = [{
    name: "role remove all",
    aliases: ["role removeall", "role remove-all"],
    category: "moderation",
    usage: "{prefix} role remove all @user",
    description: "Removes all roles from a user.",
    code: `

$sendMessage[{newEmbed:{description:Are you sure that you wanna remove all roles from <@$get[user]>?}{color:Random}}{actionRow:{button:Sure:danger:accept_$get[user]_$authorID:false}{button:Cancel:secondary:cancel_$authorID:false}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description:The user has higher position than your highest role.}{color:Red}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description:The user has higher position than my highest role.}{color:Red}}]

$onlyIf[$isBot[$get[user]]==false;{newEmbed:{description:Cannot use this command on a bot!}{color:Red}}]
    
$onlyIf[$memberExists[$get[user]]==true;{newEmbed:{description:The entered user doesn't exists within the server}{color:Red}}]

$onlyIf[$get[user]!=;{newEmbed:{description:Enter a valid user.}{color:Red}}]

$onlyIf[$hasPerms[$guildID;$clientID;manageroles]==true;{newEmbed:{description:I do not have \`MANAGE_ROLES\` permission.}{color:Red}}]

$onlyPerms[manageroles;{newEmbed:{description:You do not have \`MANAGE_ROLES\` permission.}{color:Red}}]

$let[user;$findMember[$message[1];false]]
`
}, {
    type: "interaction",
    prototype: "button",
    code: `

$editMessage[$interactionData[message.id];{newEmbed:{description:Process successfull!}{color:Green}}]

$interactionReply[;{newEmbed:{description:Successfully removed all roles from <@$get[user]>!}{color:Green}{timestamp}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}}]

$djsEval[
const memberId = "$get[user]";
const member = guild.members.cache.get(memberId);
if (member) {
    member.roles.set([])
}
;false]

$let[user;$advancedTextSplit[$interactionData[customId];_;2]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$interactionData[author.id];{newEmbed:{description:Only the author can use this button!}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==accept;]  
`
}, {
    type: "interaction",
    prototype: "button",
    code: `

$interactionUpdate[;{newEmbed:{description:Process cacelled by user.}{color:Red}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{description:Only the author can use this button!}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cancel;]    
`
}]