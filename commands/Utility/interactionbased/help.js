module.exports = {
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `
  $channelSendMessage[$channelID;{newEmbed: {field:Credit:> Gives credit dummy <3\n> **Server invite:** None?:yes }
  {field:Promote:> Promote's a roblox user in a group make sure to use the setup command! <3\n> **Server invite:** None?:yes }
  {field:Demote:> Does the opposite of Promote pretty self explanitory.  <3\n> **Server invite:** None?:yes }
  {field:Gameban:> Ban's a roblox user in a game with the help of bloxban check -credit for more info <3\n> **Server invite:** None?:yes }
  {field:Gameunban:> Pretty self explanitory. <3\n> **Server invite:** None?:yes }
  {field:Ranklock:> Locks the bot to not promote pass a certain rank in a group you'll understand when you use it. ( has slash command ) <3\n> **Server invite:** None?:yes }
  {field:Userinfo:> Uses roblox API to fetch info about you. 🫵🏽  <3\n> **Server invite:** None?:yes }
  {field:Setauth:> Set's the auth/console key for bloxban watch the **[tutorial](https://www.youtube.com/watch?v=ugvlmK6w_ng)** how to access it. *Not my video* <3\n> **Server invite:** None?:yes }
  {field:Setcookie:> The roblox account cookie being used for ranking here's a **[tutoral](https://www.youtube.com/watch?v=eUd47kPxZvQ)**. *Not my video*  <3\n> **Server invite:** None?:yes }
  {field:Setgroupid:> Uses to groupid to identify which group the account is going to rank in.  <3\n> **Server invite:** None?:yes }
  {field:Setplaceid>: Place id used for banning/unbanning users to know how click **[this](https://www.youtube.com/watch?v=ugvlmK6w_ng)**  <3\n> **Server invite:** None?:yes }
  {field:Ban:> Ban a user from a discord guild duhh <3\n> **Server invite:** None?:yes }
  {field:Unban:> Dummy it does the opposite of ban <3\n> **Server invite:** None?:yes }
  {field:Timeout:> Timeout/mute user in a guild <3\n> **Server invite:** None?:yes }
  {field:Botinfo:> Shows the bot's info <3\n>  **Server invite:** None?:yes }
  {field:Exile:> Exile a user from a roblox group <3\n> **Server invite:** None?:yes }
  {field:Shout:> Shout's a message to the linked group ( has a slash command) <3\n> **Server invite:** None?:yes }
  {color:#C3A78E}}{extraOptions:{interaction}};no]
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