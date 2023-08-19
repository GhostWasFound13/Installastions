module.exports = {
    name: "setrank",
    code: `
  
    $title[1;Success!] $description[1;> <:icons_Correct:1063605864323362897> **$get[RobloxUsername]** rank is now **$djsEval[const noblox = require("noblox.js")
    rankName = noblox.getRankNameInGroup($getguildvar[ServerId], $get[Roblox_UserId], "$get[Decrypted_Cookie]");true]**] $footer[1;took $executionTime ms $addTimeStamp[1]] $color[1;#E6E6FA]
  
    $djsEval[(async () => {
        const noblox = require("noblox.js");
        const axios = require("axios");
      
        try {
          const response = await axios.get(
            \`https://groups.roblox.com/v1/groups/$getGuildVar[ServerId]/roles\`
          );
          const roles = response.data.roles;
      
          const rank = roles.find((e) => e.name.startsWith($message[2]));
          const maxrank = $getGuildVar[RankLimit];
      
          if (maxrank && rank) {
            noblox.setRank(
              $getGuildVar[ServerId],
              $get[RobloxRankCache],
              rank,
              $get[Decrypted_Cookie]
            );
          } else {
            message.channel.send(
              "The rank provided is higher than the maximum rank that is allowed to be given, or the rank and maxrank variables are not defined. Meaning it didn't work."
            );
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      })();
      
        ]
        $let[RobloxRankCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].id;Content-Type:text/json]]

    $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey',{ pbkdf2Iterations: 10000, saltLength: $getGuildVar[salt]});
    (async () => {
       const encryptedString = '$getGuildVar[Cookie]'
    const decryptedString = cryptr.decrypt(encryptedString);
        return decryptedString;
    })();;true]]
$let[Roblox_UserId;$djsEval[const noblox = require("noblox.js");
(async () => {
let ids = await noblox.getIdFromUsername(["$message[1]"]);
return ids;
})();;true]]
   $cooldown[1s;A little too fast there bud...]
   $argsCheck[2;Make sure you have the roblox user name then the rank example E1, E2 etc.]
   $onlyif[$getGuildVar[RankLimit]!=Null;{newEmbed: {description:Is their even a ranklimit set?}{color:C3A78E}}]
   $onlyif[$getGuildVar[ServerId]!=Null;{newEmbed: {description:Is their even a serverId set?}{color:C3A78E}}]
   $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[RankPerms]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[RankPerms]> to continue}{color:C3A78E}}]
   $onlyif[$getGuildVar[RankPerms]!=Null;{newEmbed: {description:Is their even a rankperms role set?}{color:C3A78E}}]
   $onlyif[$getGuildVar[Cookie]!=Null;{newEmbed:{description:> No Cookie found follow this **[tutorial](https://www.youtube.com/watch?v=eUd47kPxZvQ)** for instuctions on to find your roblox cookie. }{footer:**REMEMBER WHEN SETTINGS COOKIE DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}}]
   $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
   $suppressErrors[Command is temp down until i have time to fix ** use slash version until i have the will power to fix **]
   
   `
  }
  
  // $suppressErrors[{newEmbed: {title:Error}{description:Does the bot account have permission to setrank aka promote? and is the user account below the bot account?}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]
  
  //$setGuildVar[RobloxDemoteCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].id;content-Type:text/json]]