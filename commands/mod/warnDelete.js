module.exports ={
  name: "case delete",
  description: "Delets the warns of a user in the guild.",
  category: "moderation",
  usage: "{prefix}case delete #id",
  code:`

Deleted warn **#$get[id]** from $username[$get[user]]

$setUserVar[warn;$math[$getUserVar[warn;$get[user]]-1];$get[user]]

$setUserVar[cases;$removeObjectProperty[$get[id];$nonEscape[$getUserVar[cases;$get[user]]]];$get[user]]

$let[user;$getObjectProperty[$get[id].user]]

$setGuildVar[warn;$math[$getGuildVar[warn]-1]]
$setGuildVar[cases;$removeObjectProperty[$get[id];$nonEscape[$getGuildVar[cases]]]]
  $onlyIf[$getObjectProperty[$get[id]]!=undefined;{newEmbed:{description:No warn registered with that id.}{color:Red}}]

$let[id;$replaceText[$message[1];#;]]

$createObject[$getGuildVar[cases]]

  
  `
}