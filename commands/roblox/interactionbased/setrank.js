module.exports = [{
    name: "setrank",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
    
$if[$isAutocomplete==true]
$autoCompleteRespond[$nonEscape[$get[ranks]]]
$let[ranks;$djsEval[const i = d.data.interaction.options.getString('robloxrank');
fetch('https://groups.roblox.com/v1/groups/$getguildvar[ServerId]/roles')
  .then(response => response.json())
  .then(data => {
    const roles = data.roles;
    const filteredRoles = roles.filter(role => role.name.toLowerCase().startsWith(i.toLowerCase()));
    
    if (filteredRoles.length === 0) {
      return "No rank found!;notfound";
    }
    
    return filteredRoles.map(role =>\`$\{role.name\};$\{role.id\}\`).join(";");
  });true]]
$else
$interactionReply[;{newEmbed: {title: Success!}{description:> <:icons_Correct:1063605864323362897> **$get[RobloxUsername]** rank is now **$djsEval[const noblox = require("noblox.js")
rankName = noblox.getRankNameInGroup($getguildvar[ServerId], $get[Roblox_UserId], "$get[Decrypted_Cookie]");true]**}{color:#C3A78E}};;;everyone;]
$djsEval[const noblox = require("noblox.js")
noblox.setRank($getguildvar[ServerId], $get[Roblox_UserId], $slashOption[robloxrank], "$get[Decrypted_Cookie]")]
$onlyif[$djsEval[const noblox = require("noblox.js")
    noblox.getRankInGroup($getguildvar[ServerId], $get[Roblox_UserId], "$get[Decrypted_Cookie]");true]<$getguildvar[RankLimit];{newEmbed: {description:> <:icons_update1:1063597590505078814><:icons_update2:1063597625221320744>\n I Cannot rank Above/Below the $ordinal[$getguildvar[RankLimit]] rank in the group}}{options:{ephemeral}}{extraOptions:{interaction}}]

  $let[Roblox_UserId;$djsEval[const noblox = require("noblox.js");
(async () => {
let ids = await noblox.getIdFromUsername(["$slashOption[robloxusername]"]);
return ids;
})();;true]]
$let[RobloxUsername;$slashOption[robloxusername]]

$let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
(async () => {
const encryptedString = '$getGuildVar[Cookie]'
const decryptedString = cryptr.decrypt(encryptedString);
return decryptedString;
})();;true]]
$onlyif[$getGuildVar[RankLimit]!=Null;{newEmbed: {description:Is their even a ranklimit set?}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[ServerId]!=Null;{newEmbed: {description:Is their even a serverId set?}{color:C3A78E}}{extraOptions:{interaction}}]
$onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[RankPerms]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[RankPerms]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[RankPerms]!=Null;{newEmbed: {description:Is their even a rankperms role set?}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[Cookie]!=Null;{newEmbed:{description:> No Cookie found follow this **[tutorial](https://www.youtube.com/watch?v=eUd47kPxZvQ)** for instuctions on to find your roblox cookie. }{footer:**REMEMBER WHEN SETTINGS COOKIE DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]$endif 
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
$suppressErrors[
  {newEmbed: 
    {title:Error}
    {description:Does the bot account have permission to setrank aka promote? and is the user account below the bot account?}
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
}]

/*$onlyif[$getGuildVar[RankLimit]!=Null;{newEmbed: {description:Is their even a ranklimit set?}{color:C3A78E}}]
$onlyif[$getGuildVar[ServerId]!=Null;{newEmbed: {description:Is their even a serverId set?}{color:C3A78E}}]
$onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[RankPerms]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[RankPerms]> to continue}{color:C3A78E}}]
$onlyif[$getGuildVar[RankPerms]!=Null;{newEmbed: {description:Is their even a rankperms role set?}{color:C3A78E}}]
$onlyif[$getGuildVar[Cookie]!=Null;{newEmbed:{description:> No Cookie found follow this **[tutorial](https://www.youtube.com/watch?v=eUd47kPxZvQ)** for instuctions on to find your roblox cookie. }{footer:**REMEMBER WHEN SETTINGS COOKIE DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}{options:{ephemeral}}{extraOptions:{interaction}}}]
*/