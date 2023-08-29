module.exports ={
  name: "embed",
  description: "Creates an embed and sends it.",
  category: "moderation",
  usage: "{prefix}embed {title:Announcement}{description:This is an announcement}",
  code:`

$sendMessage[{newEmbed:$nonEscape[$message]}]

  `
  
}