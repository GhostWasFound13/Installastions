module.exports = {
name: "calculator",
aliases: "calc",
code: `$djsEval[const { Calculator } = require("@nottca/weky");
(async () => {
await Calculator({
  message: message,
  embed: {
    title: "Calculator",
    color: "#5865F2",
    footer: "Just your typical Calculator.",
    timestamp: true,
  },
  disabledQuery: "Calculator is disabled!",
  invalidQuery: "The provided equation is invalid!",
  othersMessage: "Only <@{{author}}> can use the buttons!",
})
})();false]
  $onlyif[$getglobaluservar[blacklist]==false;I have detected that you are on the bot's blacklist for the following reason reason: **$getglobaluservar[rblacklist]** If you think it was a mistake, contact an **administrator**.] `
}
