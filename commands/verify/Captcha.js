module.exports = ({
  name: "setVerifyRole",
  code:`
$findRole[$message] is not verified role!
$setGuildVar[verifyRole;$findRole[$message]]

$onlyIf[$message[1]!=;Provide a role.]
  
$onlyIf[$hasPerms[$guildID;$authorID;manageroles];You don't have \`MANAGE_ROLES\` permission.]

  `
},{
  name: "verify",
  type: "default",
  code:`
  $setUserVar[captcha;$get[code]]

  $let[code;$djsEval[( async() => {
  const Captcha = require('captcha-generator-alphanumeric').default;

  const { EmbedBuilder, AttachmentBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js')

  let captcha = new Captcha();

  const img = new AttachmentBuilder(captcha.PNGStream, { name: 'captcha.png'})

  const button = new ButtonBuilder()
  .setLabel('Verify')
  .setCustomId('dmVerify')
  .setStyle(3)

  const row = new ActionRowBuilder()
  .addComponents(button)

  const embed = new EmbedBuilder()
  .setDescription('**Verify the captcha below**')
  .setImage('attachment://captcha.png')
  .setFooter({text: '$guildID'})
  .setAuthor({name: 'From server - $guildName', iconURL: '$guildIcon'})


  await client.users.send('$authorID', { embeds: [embed], files: [img], components: [row]})
  return captcha.value
  })();true]]

  $onlyIf[$roleExists[$getGuildVar[verifyRole;$guildID];$guildID]==true;The verify role is either invalid or not set yet.]
  
  `
},{
  name: "dmVerify",
  type: "interaction",
  prototype: 'button',
  code:`
  $setUserVar[attempt;3;$authorID;$get[guild]]
  $interactionModal[Server Verification;verify;{actionRow:{textInput:Type the code here!:1:code:captcha code:yes: :5:7}}]

  $let[guild;$getObjectProperty[embeds[0].footer.text]]
  $createObject[$nonEscape[$fetch[message;$messageID]]]
  `
},{
  name: "verify",
  type: "interaction",
  prototype: "modal",
  code:`


$giveRole[$get[guild];$authorID;$getGuildVar[verifyRole;$get[guild]];Verification]

$interactionReply[VerificationSuccessful!]

$onlyIf[$toUppercase[$textInputValue[code]]==$getUserVar[captcha;$authorID;$get[guild]];Invalid captcha provided\nRemaining attempts: $getUserVar[attempt;$authorID;$get[guild]]{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$setUserVar[attempt;$math[$getUserVar[attempt;$authorID;$get[guild]]-1];$authorID;$get[guild]]

$onlyIf[$getUserVar[attempt;$authorID;$get[guild]]!=0;You have 0 attempts left\nAgain use the verify command to solve captcha again{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

  $let[guild;$getObjectProperty[embeds[0].footer.text]]
  $createObject[$nonEscape[$fetch[message;$messageID]]]
  `
})
