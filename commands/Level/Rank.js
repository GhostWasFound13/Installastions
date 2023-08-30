module.exports = [{
  name: "level",
  code: `$author[👍| your levels;$userAvatar[$authorID]]
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
}]
