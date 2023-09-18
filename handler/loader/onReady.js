const config = require('../config.js')
const { Events } = require('discord.js');

const onReady = (bot) => {
  bot.once(Events.ClientReady, c => {
    setTimeout(async () => {
    const user = bot.user
    let r = [];
  
  r.push(`      ─━━━━━━━━━${config.whiteBg}Ready${config.end}━━━━━━━━━─`)
r.push(`         ${config.green}Client${config.end}: ${config.purple}${c.user.tag}${config.end}`)
r.push(`         ${config.green}Ping${config.end}: ${config.gray}${c.ws.ping}${config.end} ms`)
r.push(`         ${config.green}Ready${config.end}: ${config.skyBlue}true${config.end}`)
r.push(`         ${config.green}Bot Creator${config.end}: ${config.red}${(await c.application.fetch()).owner.username + '#' + (await c.application.fetch()).owner.discriminator}${config.end}`)
r.push(`         ${config.green}Guilds${config.end}: ${config.gray}${bot.guilds.cache.size}${config.end}`)
r.push(`         ${config.green}Commands loaded${config.end}: ${config.gray}${bot.cmd.default.size}${config.end}`)
r.push(`      ─━━━${config.whiteBg}Created by ahoemi${config.end}━━━━─`)

console.log(r.join('\n'))
    }, 2000)
   });
  }

module.exports = {
  onReady
}
