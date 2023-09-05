module.exports = {
    name: "stop",
    code: `
    $title[The music has been successfully stopped temporarily✅]
    $color[$getVar[color]]
    $pauseTrack
      $onlyif[$getglobaluservar[blacklist]==false;I have detected that you are on the bot's blacklist for the following reason reason: **$getglobaluservar[rblacklist]** If you think it was a mistake, contact an **administrator**.] 
    `
}
