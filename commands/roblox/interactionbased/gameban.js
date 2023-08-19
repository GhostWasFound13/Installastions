module.exports = {
    name: "gameban",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed: {title:$getObjectProperty[return]}{description:> $getObjectProperty[message] $replacetext[**$get[data[0].name]**;**undefined**;]}{footer:hi}{color:E6E6FA}};;;everyone;]
   $createObject[$jsonRequest[https://api.bloxban.com/place/ban_upload?game_id=$getGuildVar[placeId]&auth=$get[Decrypted_auth]&data={"rbx_id":$getObjectProperty[data[0].id] ,"ban_reason":"$slashOption[reason]","ban_time":1,"ban_note":"No note lol check ban message"}]]
    $let[data[0].name;$getObjectProperty[data[0].name]]
    $createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$slashOption[user]"],"excludeBannedUsers":true};;Conent-Type:text/json]]
    $let[Decrypted_auth;$djsEval[const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
(async () => {
const encryptedString = '$getGuildVar[auth]'
const decryptedString = cryptr.decrypt(encryptedString);
return decryptedString;
})();;true]]
    $onlyif[$getGuildVar[placeId]!=Null;{newEmbed:{description:> No placeID found follow this **[tutorial](https://www.youtube.com/watch?v=ugvlmK6w_ng)** for instuctions on how to setup the panel and find your placeID }{color:C3A78E}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[auth]!=Null;{newEmbed:{description:> No Auth/Console key found follow this **[tutorial](https://www.youtube.com/watch?v=ugvlmK6w_ng)** for instuctions on how to setup the panel and find your Auth/Console key }{footer:**REMEMBER WHEN SETTING AUTH/CONSOLE KEY TO DO IT IN A PRIVATE CHANNEL**}{color:C3A78E}}{extraOptions:{interaction}}]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{extraOptions:{interaction}}]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
    $suppressErrors[
        {newEmbed: 
          {title:Error}
          {description:If you've set everything correctly there shouldn't be an error here but oh well.}
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

//;**$getObjectProperty[message] $get[data[0].name]**  has been **banned** successfully