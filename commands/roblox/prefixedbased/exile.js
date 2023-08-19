module.exports = {
    name: "exile",
    code: `$description[1;> User has successfully been exiled]
    $djsEval[const noblox = require("noblox.js")
    noblox.exile($getGuildVar[ServerId], $get[RobloxUserId], "$get[Decrypted_Cookie]")]
    $get[RobloxUserId]
    $let[RobloxUserId;$httpRequest[https://users.roblox.com/v1/usernames/users;POST;{"usernames": ["$message[1]"],"excludeBannedUsers":true};data[0].id;Content-Type:text/json]]
 $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey',{ pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
    (async () => {
       const encryptedString = '$getGuildVar[Cookie]'
    const decryptedString = cryptr.decrypt(encryptedString);
        return decryptedString;
    })();;true]]
    $onlyif[$getguildvar[ServerId]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the /setup command or -setcookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]
    $onlyif[$getguildvar[Cookie]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the /setup command or -setcookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]
    $argsCheck[1;-exile (robloxusername)] 
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description:Admin role not found you must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
    $suppressErrors[{newEmbed: {title:Error}{description:Does the bot account have permission to exile users and is the user's account below the bot account?}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]
    `
}