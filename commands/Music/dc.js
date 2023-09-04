module.exports ={
    name: "dc",
    code: 
      `
      $color[$getVar[color]]
      $reply[$messageID;no]
      $title[$getVar[dc]]
      $leaveVC
      $onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getVar[errorjoin]]
      `
  }
