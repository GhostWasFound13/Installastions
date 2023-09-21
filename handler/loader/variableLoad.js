const { resolve } = require('path');
const config = require('../config.js');

const loadVariables = async (client, basePath, path) => {
  let variables = require(resolve(basePath, path));
  let startTime = Date.now();
  let output = [];

  console.log(`──────────────${config.whiteBg}Loading Variables${config.end}───────────────`);

  output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}' ${config.end}${('─').repeat(28 - path.length)}┐\n│                                            │`);

  let total = 0;

  for (let variable in variables) {
    let type = typeof variables[variable];
    total += 1;

    output.push(`│     ${config.green}• Loaded${config.end} │ \u001b[36m${variable}${config.end}${(' ').repeat(18 - variable.length)}│ ${type === 'string' ? '\u001b[35m' : type === 'number' ? '\u001b[38;2;255;0;0m' : type === 'object'? config.white : type === 'boolean' ? '\u001b[33m' : ''}${type}${config.end}${type == 'boolean' ? ' ' : '  '}│`);
  }

  output.push("│                                            │\n└────────────────────────────────────────────┘");

  client.variables(variables);
  console.log(output.join("\n"));

  console.log(`───────── Loaded ${total} Variables in ${Date.now() - startTime}ms ${'─'.repeat(35 - (`Loaded ${total} Variables in ${Date.now() - startTime}ms`).length)}\n\n`);
};

module.exports = {
  loadVariables
};
