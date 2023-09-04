module.exports = [{
  name: "rank",
  code: `const canvacord = require('canvacord');
    const discord = require('discord.js');
    
    const rank = new canvacord.Rank()
 .setOverlay('#381170', 0, false)  
.setProgressBarTrack('#2b0c56')
.setFontSize('5') 
.setProgressBar('#381170, true')

.setAvatar('$replaceText[$replaceText[$userAvatar[$mentioned[1]];webp;png];gif;png]')
    .setUsername('$replaceTextWithRegex[$username[$mentioned[1]];[^a-z A-Z 0-9 а-я А-Я\s]+;g;]')
   
 
.setDiscriminator('$discriminator[$mentioned[1]]')
    .setStatus('$status[$mentioned[1]]')
    .setLevel($getUserVar[lvl;$mentioned[1]],'Ур. ')

   
.setRank($getLeaderboardInfo[lvl;$mentioned[1];user;top], 'Топ')
  .setCurrentXP($getUserVar[xp;$mentioned[1]])
    .setRequiredXP($getUserVar[maxxp;$mentioned[1]])
    .setBackground('IMAGE', '$getUserVar[fon]')
   
    
    rank.build()
    .then(data => {
      const attachment = new discord.AttachmentBuilder(data, { name: "$username[$mentioned[1]].png"});
      message.reply({ files: [attachment] });
    })]`
    
}, {
  name: "$alwaysExecute",
  $if: "old",
  code: ``}]
    /*$author[👍| your levels;$userAvatar[$authorID]]
  $description[> Level: $getUserVar[lvl;$mentioned[1;true]]
  > xp: $getUserVar[xp;$mentioned[1;true]]
  > requirement: $getUserVar[xp;$mentioned[1;true]]/$getUserVar[reqxp;$mentioned[1;true]]
  ]
  $color[Random]`
},{
  name: "$alwaysExecute",
  code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[1;10]]]
  
  $onlyIf[$isBot[$authorID]==false;]
  
  $cooldown[2s;]`
},{
  name: "$alwaysExecute",
  code: `$setUserVar[reqxp;$sum[$getUserVar[reqxp];100]]
 $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
 $setUserVar[xp;0]

 **Congratulations <@$authorID>!** you just leveled up $sum[$getUserVar[lvl];1]
 $onlyif[$getUserVar[xp]>=$getUserVar[reqxp];]
 
 $onlyif[$isBot[$authorID]==false;]`
}]*/
