module.exports = {
    name: "shout",
    code:` $title[Success!]
    $description[1;> Your Shout has been posted successfully! feel free to check]
    $footer[1;Feel free to report and problems]
    $color[1;#C3A78E]
    $djsEval[const noblox = require("noblox.js")
       noblox.shout($getGuildVar[ServerId], "$message", "$get[Decrypted_Cookie]")
        ]

        $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey',{ pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
    (async () => {
       const encryptedString = '$getGuildVar[Cookie]'
    const decryptedString = cryptr.decrypt(encryptedString);
        return decryptedString;
    })();;true]]
$onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
$onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
$suppressErrors[{newEmbed: {title:Error}{description:Do you have a cookie set? and can the bot account shout in the group?}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]

`
}

//$onlyForIDs[964024743172915220;Not owner]