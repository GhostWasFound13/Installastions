module.exports = [{
  name: "giveaway create",
  category: "giveaway",
  usage: "{prefix}giveaway create",
  code:`
  
  $sendMessage[{newEmbed:{title:Giveaway Creation}{description:Create giveaways with interactive settings}{color:Aqua}}{actionRow:{button:Create Giveaway!:3:giveawayCreate.$authorID:false:🎉}}]
  
  `
},{
  type: "interaction",
  prototype: "button",
  code:`
  $interactionModal[Giveaway Creation Page;giveawayCreate;
  {actionRow:{textInput:Channel ID:2:channelInput::false::0:250}}
  {actionRow:{textInput:Prize:1:prizeInput:Prize:true::0:250}}
  {actionRow:{textInput:Time:1:timeInput:Ex#COLON# 10m:true::0:10}}
  {actionRow:{textInput:Winners:1:winnerInput:Number of winners:true:1:1:10}}
  {actionRow:{textInput:Hoster ID:1:hosterInput:Id of the one who is hosting the giveaway:false:$authorID:0:250}}]


  

  $onlyIf[$splitText[2]==$authorId]
  $onlyIf[$splitText[1]==giveawayCreate]
  $textsplit[$interactionData[customId];.]
  `
},{
  name: "giveawayCreate",
  type: "interaction",
  prototype: "modal",
  code:`

$interactionUpdate[**Giveaway Preview**;

{newEmbed:{color:Aqua}{title:$textInputValue[prizeInput]}{description:Click 🎉 button to participate!
Ends: <t:$truncate[$math[($dateStamp+$parseTime[$textInputValue[timeInput]])/1000]]:R>
Entries: **0**
Winner(s): Pending!
Hosted by: <@$textInputValue[hosterInput]>}{footer:$textInputValue[winnerInput] winner(s) to be choosen}{timestamp}}

$nonEscape[$if[$textInputValue[stickyInput]!=;{newEmbed:{title:Sticked Message}{description:$nonEscape[$if[$textInputValue[stickyInput]==;None;$textInputValue[stickyInput]]]}{color:Aqua}}]]
;
{actionRow:{button:Add Requirement:2:requirementAdd.$authorID:false}{button:Start Giveaway:4:giveawaySend:false}}]

  
  `
}] 