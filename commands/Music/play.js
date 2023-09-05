module.exports = {
    name: "play",
    aliases: "p",
    $if: "old",
    code: `
    $setGuildVar[authorbutton;$authorID]
  $interactionDefer[false]
  $title[Song Added To Queue✅]
  $color[$getVar[color]]
  $playTrack[$nonescape[$message];youtube]
    $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]  
      $if[$hasPlayer==false]
          $joinVc[$voiceId]
          $djsEval[console.log("\\u001b\\[36m[LOG] $username Just Used Play Cmd!\\n \\n[LOG] Title Of Song:$message\\u001b\\[36m")]

      $endif
      $suppressErrors[No Song has been  Found yet 🔍]
      $onlyIf[$voiceId!=; ⛔ You're not in a voice channel!]
        $onlyif[$getglobaluservar[blacklist]==false;I have detected that you are on the bot's blacklist for the following reason reason: **$getglobaluservar[rblacklist]** If you think it was a mistake, contact an **administrator**.] 
  
      `
  }

    /*
For Playing From Youtube
$playTrack[$nonescape[$message];youtube]
  

For Playing From Spotify
$playTrack[$nonescape[$message];spotify]


For Playing From Soundcloud
$playTrack[$nonescape[$message];soundcloud]
  */
