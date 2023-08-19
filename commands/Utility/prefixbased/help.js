module.exports = {
    name: "help",
    code: `
    $addField[1;Credit;> I wanted to put this command first to give credit where it's due. <3\n> **Server invite:** None? ;true]
    $addField[1;Promote;> Promote's a roblox user in a group make sure to use the setup command! <3\n> **Server invite:** None? ;true]
    $addField[1;Demote;> Does the opposite of Promote pretty self explanitory.  <3\n> **Server invite:** None? ;true]
    $addField[1;Gameban;> Ban's a roblox user in a game with the help of bloxban check -credit for more info <3\n> **Server invite:** None? ;true]
    $addField[1;Gameunban;> Pretty self explanitory. <3\n> **Server invite:** None? ;true]
    $addField[1;Ranklock;> Locks the bot to not promote pass a certain rank in a group you'll understand when you use it. <3\n> **Server invite:** None? ;true]
    $addField[1;Userinfo;> Uses roblox API to fetch info about you. 🫵🏽  <3\n> **Server invite:** None? ;true]
    $addField[1;Setauth;> Set's the auth/console key for bloxban watch the **[tutorial](https://www.youtube.com/watch?v=ugvlmK6w_ng)** how to access it. *Not my video* <3\n> **Server invite:** None? ;true]
    $addField[1;Setcookie;> The roblox account cookie being used for ranking here's a **[tutoral](https://www.youtube.com/watch?v=eUd47kPxZvQ)**. *Not my video*  <3\n> **Server invite:** None? ;true]
    $addField[1;Setgroupid;> Uses to groupid to identify which group the account is going to rank in.  <3\n> **Server invite:** None? ;true]
    $addField[1;Setplaceid;> Place id used for banning/unbanning users to know how click **[this](https://www.youtube.com/watch?v=ugvlmK6w_ng)**  <3\n> **Server invite:** None? ;true]
    $addField[1;Ban;> Ban a user from a discord guild duhh <3\n> **Server invite:** None? ;true]
    $addField[1;Unban;> Dummy it does the opposite of ban <3\n> **Server invite:** None? ;true]
    $addField[1;Timeout;> Timeout/mute user in a guild <3\n> **Server invite:** None? ;true]
    $addField[1;Botinfo;> Shows the bot's info <3\n>  **Server invite:** None? ;true]
    $addField[1;Exile;> Exile a user from a roblox group <3\n> **Server invite:** None? ;true]
    $addField[1;Shout;> Shout's a message to the linked group  <3\n> **Server invite:** None? ;true]
    $color[1;#C3A78E]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}}]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error but oh well}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}}]
    
    `
}