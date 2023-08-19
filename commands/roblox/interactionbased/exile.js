module.exports = {
    name: "exile",
    type: "interaction",
    prototype: "slash",
    code:` $channelSendMessage[$channelID;{newEmbed:{title:Successful!}{color:#E6E6FA}
        {description:> $get[RobloxUsername] has been exiled!}{footer:Hi from bot dev}}{extraOptions:{interaction}};no]
        $djsEval[const noblox = require("noblox.js")
        noblox.exile($getGuildVar[ServerId], $get[RobloxUserId], "$get[Decrypted_Cookie]")]
$let[RobloxPromoteCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$slashOption[user]"],"excludeBannedUsers":true};data[0].id;Content-Type:text/json]]
$let[RobloxUsername;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$slashOption[user]"],"excludeBannedUsers":true};data[0].name;Content-Type:text/json]]
$let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey',{ pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
(async () => {
const encryptedString = '$getGuildVar[Cookie]'
const decryptedString = cryptr.decrypt(encryptedString);
return decryptedString;
})();;true]]
$onlyif[$getGuildVar[RankLimit]!=Null;{newEmbed: {description:Is their even a ranklimit set?}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[ServerId]!=Null;{newEmbed: {description:Is their even a serverId set?}{color:C3A78E}}{extraOptions:{interaction}}]
$onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyif[$getGuildVar[Cookie]!=Null;{newEmbed:{description:> No Cookie found follow this **[tutorial](https://www.youtube.com/watch?v=eUd47kPxZvQ)** for instuctions on to find your roblox cookie. }{footer:**REMEMBER WHEN SETTINGS COOKIE DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
$suppressErrors[
    {newEmbed: 
      {title:Error}
      {description:Does the bot account have permission to exile users and is the user's account below the bot account?}
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