const { resolve } = require('path');
const config = require('../config.js')


const loadStatus = async (bot, basePath, path) => {
const file = require(resolve(basePath, path));
let startTime = Date.now();
const output = [];
console.log(`──────────────\u001b\[7mLoading Status${config.end}──────────────────`)
  
output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}' ${config.end}${('─').repeat(28 - path.length)}┐`);
  
let i = 1;
for (let status of file.statuses) {
let l;
try {
  bot.status({
    text: status?.text,
     type: status?.type.toUpperCase(),
      time: status?.time
});
output.push(`│                                            │\n│     ${config.green}• Loaded Status ${i}${config.end}${(' ').repeat(23 - (i.toString()).length)}│`)

output.push(`│       - Type: ${status?.type.toUpperCase()}${(' ').repeat(29 - status?.type.toUpperCase().length)}│`)
  
output.push(`│       - Text: ${status?.text}${(' ').repeat(29 - status?.text.length)}│`)

output.push(`│       - Time: ${status?.time} second(s)${(' ').repeat(19 - (status?.time.toString()).length)}│`)
  
  
} catch (e) {
l = "Failed"
}

i++;
      
      
}
  
output.push("│                                            │\n└────────────────────────────────────────────┘");

console.log(output.join('\n'))
  
console.log(`───────── Loaded ${i - 1} Statuses in ${Date.now() - startTime}ms ${'─'.repeat(35 - (`Loaded ${i - 1} Statuses in ${Date.now() - startTime}ms`).length)}\n\n`);
  
}

module.exports = {
  loadStatus
}