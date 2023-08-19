module.exports = {
    name: "demote",
    type: "interaction",
    prototype: "slash",
    code:` $channelSendMessage[$channelID;{newEmbed:{title:Successful!}{color:#E6E6FA}
        {description:> <:icons_Correct:1063605864323362897> **$get[RobloxUsername]** rank is now **$djsEval[const noblox = require("noblox.js")
        rankName = noblox.getRankNameInGroup($getguildvar[ServerId], $get[RobloxdemoteCache], "$get[Decrypted_Cookie]");true]**}{footer:Hi from bot dev}}{extraOptions:{interaction}};no]
    $wait[1s]
        $djsEval[const noblox = require("noblox.js")
noblox.demote($getguildvar[ServerId], $get[RobloxdemoteCache], "$get[Decrypted_Cookie]")] 
$onlyif[$djsEval[const noblox = require("noblox.js")
noblox.getRankInGroup($getguildvar[ServerId], $get[RobloxdemoteCache], "$get[Decrypted_Cookie]");true]<$getguildvar[RankLimit];<:icons_update1:1063597590505078814><:icons_update2:1063597625221320744>\n I Cannot rank Above/Below the $getguildvar[RankLimit] rank in the group {options:{ephemeral}}{extraOptions:{interaction}}]
$let[RobloxdemoteCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].id;Conent-Type:text/json]]
$let[RobloxUsername;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].name;Conent-Type:text/json]]
 $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey',{ pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
    (async () => {
       const encryptedString = '$getGuildVar[Cookie]'
    const decryptedString = cryptr.decrypt(encryptedString);
        return decryptedString;
    })();;true]]
$onlyif[$getGuildVar[RankLimit]!=Null;{newEmbed: {description:Is their even a ranklimit set?}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[ServerId]!=Null;{newEmbed: {description:Is their even a serverId set?}{color:C3A78E}}{extraOptions:{interaction}}]
$onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[RankPerms]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[RankPerms]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[RankPerms]!=Null;{newEmbed: {description:Is their even a rankperms role set?}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[Cookie]!=Null;{newEmbed:{description:> No Cookie found follow this **[tutorial](https://www.youtube.com/watch?v=eUd47kPxZvQ)** for instuctions on to find your roblox cookie. }{footer:**REMEMBER WHEN SETTINGS COOKIE DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
$suppressErrors[
    {newEmbed: 
      {title:Error}
      {description:Does the bot account have permission to demote? and is the user account below the bot account?}
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