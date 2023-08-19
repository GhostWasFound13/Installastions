module.exports = {
    name: "Userinfo",
    code: `$title[1;Successful!] $color[1;#E6E6FA] $description[1; <:icons_text3:1063597445000462436>**Username**: $getObjectProperty[data[0].name] \n <:icons_text6:1063597403833380904>**Roblox ID**: $getObjectProperty[data[0].id] \n <:icons_text6:1063597403833380904>**Display Name**: $getObjectProperty[data[0].displayName] \n <:icons_text6:1063597403833380904>**Description**: $jsonRequest[https://users.roblox.com/v1/users/$getObjectProperty[data[0].id];description] \n <:icons_text6:1063597403833380904>**hasVerifiedBadge**: $getObjectProperty[data[0].hasVerifiedBadge] \n <:icons_text6:1063597403833380904>**Join Date**: $get[joinDate] \n <:icons_text1:1063597526604853248>**Account Age**: $get[age] days]  $footer[1;$executionTime ms $addtimestamp] $image[1;$get[robloxav_link]] $let[robloxav_link;https://tr.rbxcdn.com/$splitText[4]/$splitText[5]/$splitText[6]/Avatar/Png] 
    
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
    
    $createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};;content-Type:text/json]]
    $argsCheck[1;username?]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
    $suppressErrors[{newEmbed: {title:Error}{description:Is the username correct?}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]
   `
    }