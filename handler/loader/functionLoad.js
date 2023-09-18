const { resolve } = require('path');
const config = require('../config.js');
const { readdirSync } = require('fs');

const loadFunctions = async (bot, basePath, path) => {
  const exPath = resolve(basePath, path) + '/';
  const funcs = [];

  readdirSync(exPath).map(x => !x.endsWith('.js') ? readdirSync(exPath + x).forEach(y => funcs.push(exPath + x + '/' + y)) : funcs.push(exPath + x));

  let startTime = Date.now();
  let output = [];
  let total = 0;

  console.log(`───────────\u001b\[7mLoading Custom Function${config.end}────────────`);

  output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${config.end} ${'─'.repeat(28 - path.length)}┐\n│                                            │`);

  for (let func of funcs) {
    let f = func.split("/")[func.split("/").length - 1].split('.')[0];
    let o = require(func);

    let ty = "";
    let color = ''
    if (o.type == "djs") {
      ty = 'D.js'
      color = '\u001b[38;2;255;229;0m'
    } else if (o.type == "aoi.js") {
      ty = 'Aoi.js'
      color = '\u001b[38;2;0;208;255m'
    } else if (o.type == 'undefined' || o.type == '' || o.type != 'djs' || o.type != 'aoi.js') {
      ty = 'Invalid'
      color = '\u001b[38;2;255;0;0m'
    }

    try {
      if (o.type !== 'undefined' && o.code || o.type == 'djs' || o.type == 'aoi.js') {
        total += 1;
if (o.type == 'djs') {   bot.functionManager.createFunction({
          name: `$${f}`,
          type: o.type,
          code: o.code
        })
} else if (o.type == 'aoi.js') {
bot.functionManager.createFunction({
          name: `$${f}`,
          type: o.type,
          params: o.params,
          code: o.code
        })
}

        output.push(`│     \u001b[38;2;4;255;0m• Loaded${config.end} │ \u001b[36m$${f}${config.end}${(' ').repeat(17 - f.length)}│ ${color}${ty}${config.end}${(' ').repeat((ty == 'D.js' ? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
      } else {
output.push(`│     \u001b[38;2;255;0;0m• Failed${config.end} │ \u001b[36m$${f}${config.end}${(' ').repeat(17 - f.length)}│ ${color}${ty}${config.end}${(' ').repeat((ty == 'D.js' ? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
        console.log(o.type)
      }
    } catch (error) {
      output.push(`│     \u001b[38;2;255;0;0m• Failed${config.end} │ \u001b[36m$${f}${config.end}${(' ').repeat(17 - f.length)}│ \u001b[38;2;255;0;0m${ty}${config.end}${(' ').repeat((ty == 'D.js' ? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
    }
  }
  
  output.push("│                                            │\n└────────────────────────────────────────────┘");
  console.log(output.join('\n'))

  console.log(`──── Loaded ${total} successful functions in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful functions in ${Date.now() - startTime}ms`).length)}\n\n`);
};

module.exports = {
  loadFunctions
};
