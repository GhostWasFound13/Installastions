module.exports = ({
name: "achievement",
aliases: ['trophy'],
$if: "old",
code: `
$image[https://minecraftskinstealer.com/achievement/1/Achievement+Get%21/$replaceText[$message; ;+;-1]]
$addTimestamp
$title[🆙 Player $username got a new achievement!]
$argsCheck[>0;:x: | Put something.]
$color[#ffffff]
$onlyif[$emojisFromMessage[$message]==;**You can't put emojis.**]

$onlyIf[$charCount[$message]<=18;**Invalid characters or maximum characters reached \`18\`.**]
$onlyif[$getglobaluservar[blacklist]==false;I have detected that you are on the bot's blacklist for the following reason
reason: **$getglobaluservar[rblacklist]**
If you think it was a mistake, contact an **administrator**.]`
})
