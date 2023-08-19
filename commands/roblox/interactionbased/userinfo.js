module.exports = {
    name: "Userinfo",
    type: "interaction",
    prototype: "slash",
    code: `$channelSendMessage[$channelID;{newEmbed: {title:Successful!}{color:#E6E6FA}{description:<:icons_text3:1063597445000462436>**Username**: $getObjectProperty[data[0].name] \n <:icons_text6:1063597403833380904>**Roblox ID**: $getObjectProperty[data[0].id] \n <:icons_text6:1063597403833380904>**Display Name**: $getObjectProperty[data[0].displayName] \n <:icons_text6:1063597403833380904>**Description**: $jsonRequest[https://users.roblox.com/v1/users/$getObjectProperty[data[0].id];description] \n <:icons_text6:1063597403833380904>**hasVerifiedBadge**: $getObjectProperty[data[0].hasVerifiedBadge] \n <:icons_text6:1063597403833380904>**Join Date**: $get[joinDate] \n <:icons_text1:1063597526604853248>**Account Age**: $get[age] days}{footer: .ms .}{image:$get[robloxav_link]}} {extraOptions:{interaction}};no?] $let[robloxav_link;https://tr.rbxcdn.com/$splitText[4]/$splitText[5]/$splitText[6]/Avatar/Png] 
    
    $textSplit[$get[roblox_av];/]  $let[roblox_av;$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$getObjectProperty[data[0].id]&size=720x720&format=Png&isCircular=false]]
    
    $let[joinDate;$djsEval[(async () => {
        const noblox = require("noblox.js")
        let information= await noblox.getPlayerInfo({userId: $getObjectProperty[data[0].id]})
        return information.joinDate;
        })();true]]
    
        $let[age;$djsEval[(async () => {
            const noblox = require("noblox.js")
            let information= await noblox.getPlayerInfo({userId: $getObjectProperty[data[0].id]})
            return information.age;
            })();true]]
    
    $createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};;Conent-Type:text/json]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
    $suppressErrors[
{newEmbed: 
  {title:Error}
  {description:Do you have a cookie set? and can the bot account shout in the group?}
  {footer: if this error continues feel free to contact a dev}
  {color:E6E6FA}
}
{options:
  {ephemeral}
}
{extraOptions:
  {interaction}
}
]`
    }
    