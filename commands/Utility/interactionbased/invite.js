module.exports = {
    name: "invite",
    type: "interaction",
    prototype: "slash",
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title: Lets Gooo}}{description:> Click the button below to invite me!  }{footer: . ms.}{color:#C3A78E}}{extraOptions:{interaction}};no]
  $addButton[1;invite;link;https://discord.com/api/oauth2/authorize?client_id=1062912672993124352&permissions=10432235957751&scope=bot%20applications.commands;false]
  `
  }