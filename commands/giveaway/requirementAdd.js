module.exports = {
  type: "interaction",
  prototype: "button",
  code:`

  $interactionModal[Add Giveaway Requirement;requirementAdd;{actionRow:{textInput:Server Invite?:1:serverInput:Checks if user is in the provided server:false::0:25}}
  {actionRow:{textInput:Whitelist Roles:2:whitelistInput:Ex#COLON# 1142066363079336110, 1142066362592804966:false::0:2000}}
  {actionRow:{textInput:Server Age:1:serverAgeInput:Check if user's age in server meets requirement:false:1d:1:10}}
  {actionRow:{textInput:Blacklisted Roles:2:blacklistInput::false::0:2000}}]


  
  $onlyIf[$splitText[2]==$authorID]
  $onlyIf[$splitText[1]==requirementAdd]
  $textSplit[$interactionData[customId];.]
  `
}