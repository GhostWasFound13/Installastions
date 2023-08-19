module.exports ={
  name: "timeout",
  code: `$description[1;> Timed out user for $message[2]\n > Reason: $if[$messageslice[2]==;No reason provided;$messageslice[2]]]
  $color[Red]
  $timeoutMember[$guildID;$findMember[$message[1];yes];$message[2];no;$if[$messageslice[2]==;No reason provided;$messageslice[2]];]
$onlyIf[$message[2]!=;you must provide a duration, the maximum is up to 28 days]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; **$username** You can't timeout that user]
$onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];**$username** They have the same role as me]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];**$username** They have a higher role than you]
$onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];**$username** They have a higher role than me or the same role as me]
$onlyIf[$findMember[$message[1];yes]!=$ownerID; **$username** You can't timeout the server owner dummy]
$onlyIf[$findMember[$message[1];yes]!=$authorID; **Correct usage: \`\`\`js
-timeout < @user > < duration > < reason >\`\`\`**]
$onlyIf[$findMember[$message[1];yes]!=$clientID;**$username** never try that
$onlyIf[$hasPerms[$guildid;$authorid;moderatemembers]==true;**$username** You are missing **\`MODERATE_MEMBERS\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;moderatemembers]==true;**$username** I am missing **\`MODERATE_MEMBERS\`** permission]
$onlyIf[$message[2]<=28d;you can't timeout for more than 28 days... lol]
$onlyIf[$message[2]<=3w;you can't timeout for more than 28 days nuh uh]
$onlyIf[$message[2]<=86400s;you can't timeout for more than 28 days duhhh]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
$argsCheck[>0;you need to provide a user to timeout with the duration (providing a reason will be recorded in audit logs)]
`
}