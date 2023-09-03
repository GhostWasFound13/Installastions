module.exports = {
    name: "skip",
    code: `
    $title[$getVar[getVar[skip]]
    $color[$getVar[color]]
    $addTimestamp[1;$dateStamp]
    $skipTrack
    $onlyIf[$voiceID!=;$getVar[errorjoin]]
    `
}
