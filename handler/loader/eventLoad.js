const { resolve } = require('path');
const config = require('../config.js')
const { readdirSync } = require('fs')

const loadEvents = async (client, basePath, path) => {
const exPath = resolve(basePath, path) + '/'
const events = []
  readdirSync(exPath).map((event)=> {
    if(event.endsWith('.js')) {
      events.push(event)
    }
  })
const validEvent = Object.getOwnPropertyNames(bot._events);
const startTime = Date.now();

console.log(`──────────────\u001b\[7mLoading Events${config.end}────────────────`);

const output = [];
let total = 0;
output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${config.end} ${'─'.repeat(28 - path.length)}┐\n│                                            │`);

for (let event of events) {
const name = event.split('.')[0].slice(2, (event.split('.')[0]).length).toLowerCase()

const cmd = require(exPath + event)
try {
  
if (!cmd.type || cmd.type === '' || !validEvent.includes(cmd.type)){
  output.push(`│     \u001b[38;2;255;0;0m• Failed ${event}${config.end}${(' ').repeat(30 - event.length)}│`)


if (!cmd.type || cmd.type === '') {
output.push(`│       - Event type not provided            │`)
} else if (!validEvent.includes(cmd.type))
{
  output.push(`│       - "${cmd.type}" is not valid event${(' ').repeat(14 - cmd.type.length)}│`)
}
} else {
client.cmd.createCommand(cmd)
total += 1;
output.push(`│     ${config.green}• Loaded${config.end} ${event}${(' ').repeat(30 - event.length)}│\n│       - Type: on${(cmd.type).charAt(0).toUpperCase() + (cmd.type).slice(1)}${(' ').repeat(27 - ((cmd.type).charAt(0).toUpperCase() +(cmd.type).slice(1)).length)}│`)
 }

}
catch (error) {}

}
  
output.push("│                                            │\n└────────────────────────────────────────────┘");
  
console.log(output.join('\n'))
  
console.log(`──── Loaded ${total} successful events in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful events in ${Date.now() - startTime}ms`).length)}\n\n`);
}

module.exports = {
  loadEvents
}
