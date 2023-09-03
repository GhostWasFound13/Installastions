module.exports = {
    name: "stop",
    aliases: "st",
    code: `
    $title[Music stopped successfully✅]
    $color[$getVar[color]]
    $stopTrack
      $onlyIf[$voiceId!=;$getVar[errorjoin]]
       $onlyIf[$hasPlayer!=;false;$getVar[errorqueue]]
   
  
    `
}
