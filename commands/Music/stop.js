module.exports = {
    name: "stop",
    aliases: "st",
    code: `
    $reply[$messageID;no]
    $title[$getVar[stop]]
    $color[$getVar[color]]
    $stopTrack
      $onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getVar[errorjoin]]
       $onlyIf[$hasPlayer!=;false;$getVar[errorqueue]]
   
  
    `
}
