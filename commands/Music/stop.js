module.exports = {
    name: "stop",
    aliases: "st",
    code: `
    $reply[$messageID;no]
    $title[$getVar[stop]]
    $color[$getVar[color]]
    $stopTrack
      $onlyIf[$voiceId!=;$getVar[errorjoin]]
       $onlyIf[$hasPlayer!=;false;$getVar[errorqueue]]
   
  
    `
}
