module.exports = [{ 
  name: "afk", 
  $if: "old", 
  code: `
  $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]] 
  $if[$hasPerms[$guildID;$clientID;managenicknames]==true] 
  $if[$authorID!=$ownerID] $if[$nickname!=] 
  $changeNickname[$authorID;AFK | $nickname;User in Afk] 
  $else 
  $changeNickname[$authorID;AFK | $username;User in afk] 
  $endif 
  $endif 
  $endif 
  $endif 
  $author[AFK;$userAvatar] 
  $description[<@$authorID> is now afk. \n Reason: $getUserVar[afkr]] 
  $color[Random] 
  $setUserVar[afk;true] 
  $wait[1ms] 
  $setUserVar[afkr;$message]
  $onlyif[$getUserVar[afk]!=true;] 
  $footer[$guildName[$guildID]
  $addTimestamp] 
  $reply[$messageID;true] 
  $onlyif[$getglobaluservar[blacklist]==false;I have detected that you are on the bot's blacklist for the following reason reason: **$getglobaluservar[rblacklist]** If you think it was a mistake, contact an **administrator**.] ` },
                  { 
                    name: "$alwaysExecute", 
                   $if: "old",
                   code: `
                   $if[$getUserVar[afk]==true;]
                   $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]] 
                   $if[$hasPerms[$guildID;$clientID;managenicknames]==true] 
                   $if[$authorID!=$ownerID] 
                   $changeNickname[$authorID;$replaceText[$nickname;AFK | ;;1];User in Afk ] 
                   $endif 
                   $endif 
                   $endif 
                   $setUserVar[afkr;] 
                   $setUserVar[afk;false] Welcome back to chat <@$authorID> $elseif[$mentioned[1;yes]!=$authorID] 
                   $if[$getUserVar[afk;$mentioned[1]]==true] $username[$mentioned[1]] is afk, reason: $getUserVar[afkr;$mentioned[1]] 
                   $endif
                   $endelseif
                   $endif
$wait[1ms] ` }]
