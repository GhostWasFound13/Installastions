module.exports = {
    name: "setauth",
    aliases: "seta",
    code: `
    $description[> The Auth/Console key has been successfully been set to **$getGuildVar[auth]**]
    $color[1;#C3A78E]
    $wait[1s]
    $setGuildVar[auth;$get[auth]] 
$let[auth;$djsEval[const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt] });
(async () => {
    const encryptedString = cryptr.encrypt('$message[1]');
    const decryptedString = cryptr.decrypt(encryptedString);
    return encryptedString;
})();;true]]
$setGuildVar[salt;$random[1;2000]]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error here but oh well.}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]`
}