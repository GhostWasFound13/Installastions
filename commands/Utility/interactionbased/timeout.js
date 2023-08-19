module.exports = {
    name: "timeout",
    type: "interaction",
    prototype: "slash",
    code: ` $interactionReply[;{newEmbed: {color:Red} {description:> Timed out user for $message[2]\n > Reason:  $if[$slashOption[reason]==;No reason provided;$slashOption[reason]]}};;;everyone;]
     $timeoutMember[$guildID;$findMember[$slashOption[user];yes];$slashOption[duration];no;$if[$slashOption[reason]==;No reason provided;$slashOption[reason]];]
    $onlyIf[$slashOption[duration]!=;you must provide a duration, the maximum is up to 28 days{extraOptions:{interaction}}]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$slashOption[user];yes]]]; **$username** You can't timeout that user{extraOptions:{interaction}}]
    $onlyIf[$highestRole[$findMember[$slashOption[user];yes]]!=$highestRole[$authorID];**$username** They have the same role as me{extraOptions:{interaction}}]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$slashOption[user];yes]]];**$username** They have a higher role than you{extraOptions:{interaction}}]
    $onlyIf[$highestRole[$findMember[$slashOption[user];yes]]!=$highestRole[$clientID];**$username** They have a higher role than me or the same role as me{extraOptions:{interaction}}]
    $onlyIf[$findMember[$slashOption[user];yes]!=$ownerID; **$username** You can't timeout the server owner dummy{extraOptions:{interaction}}]
    $onlyIf[$findMember[$slashOption[user];yes]!=$authorID; **Correct usage: \`\`\`js
    -timeout < @user > < duration > < reason >\`\`\`**{extraOptions:{interaction}}]
    $onlyIf[$findMember[$slashOption[user];yes]!=$clientID;**$username** never try that{extraOptions:{interaction}}]
    $onlyIf[$hasPerms[$guildid;$authorid;moderatemembers]==true;**$username** You are missing **\`MODERATE_MEMBERS\`** permission{extraOptions:{interaction}}]
    $onlyIf[$hasPerms[$guildid;$clientid;moderatemembers]==true;**$username** I am missing **\`MODERATE_MEMBERS\`** permission{extraOptions:{interaction}}]
    $onlyIf[$slashOption[duration]<=28d;you can't timeout for more than 28 days... lol{extraOptions:{interaction}}]
    $onlyIf[$slashOption[duration]<=3w;you can't timeout for more than 28 days nuh uh{extraOptions:{interaction}}]
    $onlyIf[$slashOption[duration]<=86400s;you can't timeout for more than 28 days duhhh{extraOptions:{interaction}}]
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