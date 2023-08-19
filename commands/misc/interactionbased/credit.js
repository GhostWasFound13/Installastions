module.exports = {
    name: "credit",
    type: "interaction",
    prototype: "slash",
    code: `
  $channelSendMessage[$channelID;{newEmbed: {field:Credit:> I wanted to put this command first to give credit where it's due. <3\n> **Server invite:** None?:yes }
  {field:Aoi.js:> The backend of this bot is built proud with aoi.js<3\n> **Server invite:**.gg/akarui\n [Website](https://aoi.js.org/):yes }
  {field:BloxBan:> The API used to make game moderation is built proud with bloxban <3\n> **Server invite:**.gg/sUZMhJXY3Hi\n [Website](https://bloxban.com/):yes }
  {field:Noblox.js:> The backend of the group based commands are built proud with noblox.js <3\n> **Server invite:** .gg/qKPTduAP\n [Website](https://noblox.js.org/):yes }
  {field:Bcrypt:> Used to encrypt the Auth/Console key and Cookie so that if there is a breach which is unlikely your data is safe <3\n> **Server invite:** None?\n [Website](https://www.npmjs.com/package/bcrypt):yes }
  {field:RoSerices:> This bot is based off RoServices their bot made me make my own <3\n> **Server invite:** .gg/rSmDHhpfkQ\n [Website](https://roservices.app/):yes }
  {field:Dodogames:> My friend also stole some commands <3\n> **Server invite:** .gg/vYdpYu9JaQ \n [Website](https://www.youtube.com/watch?v=dQw4w9WgXcQ):yes }
  {field:Lightner:>  My friend of 2 years crazy long tbh also helped me with the project <3\n> **Server invite:** None? lightner dm me if u want a server here\n [Website](https://www.youtube.com/watch?v=dQw4w9WgXcQ):yes }
  {color:#C3A78E}}{extraOptions:{interaction}};no]
  $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
  `
}