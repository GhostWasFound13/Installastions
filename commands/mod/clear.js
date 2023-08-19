module.exports = {
  name: "clear",
  description: "This will delete/purge the messages.",
  aliases: ["purge", "clean"],
  category: "moderation",
  usage: ["{prefix}clear 10", "{prefix}clear 10 @user"],
  code:`
  $sendMessage[cleared $math[$clear[$math[$message[1]+1];$if[$get[user]==;unPins;$get[user]];true;$channelID]-1] messages$if[$get[user]==;; of $username[$if[$get[user]==;$authorID;$get[user]]].]{extraOptions:{delete:5s}}]

  $let[user;$findUser[$message[2];false]]
  
  `
}