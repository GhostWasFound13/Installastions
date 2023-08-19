module.exports = {
    name: "setup",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description:> Congratulations you have successfully setup **Victier!** now try the command to see if they work!! If you have any problem join our **[Support Server](https://discord.gg/uFq5DER6ba)** **MAKE SURE THIS COMMAND WAS RUN IN A PRIVATE CHANNEL IF IT WAS NOT DELETE THIS MESSAGE NOW!!**}{color:C3A78E}}};no]
    $setGuildVar[placeId;$slashOption[placeid]]
    $setGuildVar[ServerId;$slashOption[groupid]]
    $setGuildVar[RankLimit;$slashOption[ranklock]]
    $setGuildVar[RankPerms;$slashOption[rankperm]]
    $setGuildVar[AdminRole;$slashOption[adminrole]]
    $setGuildVar[Cookie;$get[Cookie]] 
    $let[Cookie;$djsEval[const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt] });
(async () => {
    const encryptedString = cryptr.encrypt('$message[1]');
    const decryptedString = cryptr.decrypt(encryptedString);
    return encryptedString;
})();;true]]
$ifAwaited[$slashOption[auth]==;{execute:null};]
$setGuildVar[auth;$get[auth]] 
$let[auth;$djsEval[const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt] });
(async () => {
    const encryptedString = cryptr.encrypt('$message[1]');
    const decryptedString = cryptr.decrypt(encryptedString);
    return encryptedString;
})();;true]]
$setGuildVar[salt;$random[1;2000]]

    $onlyif[$isNumber[$slashOption[groupid]]==true;{newEmbed: {description:> **A GROUP_ID is a integer how did you find a string? 🖐️🤓🖐️**}{color:C3A78E}}]
   $onlyPerms[administrator;You need admin permission]
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

/* $onlyif[$isNumber[$message[1]]==true;{newEmbed: {description:> **A RankLock is a integer how did you find a string? :)**}{color:C3A78E}}]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]*/

    //    $setGuildVar[Cookie;$slashOption[cookie]]     $setGuildVar[auth;$slashOption[auth]]