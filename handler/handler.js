
const { readdirSync } = require("fs");
const {resolve} = require('path');
const { Events } = require('discord.js');


const config = require('./config.js')

const loaded = '\u001b[38;2;4;255;0m+ Loaded'
const failed = '\u001b[38;2;255;0;0m- Failed'
const end = '\u001b[0m'
const green = '\u001b[38;2;4;255;0m'

class Handler {
constructor(bot, basePath) {
  this.bot = bot.bot;
  this.basePath = basePath
  const theme = bot.theme;
  const style = bot.style;
  const platform = bot.device;
  const ready = bot.readyLog

  

  if ( ready ) { 
  
  this.bot.once(Events.ClientReady, c => {
    setTimeout(async () => {
    const user = this.bot.user
    let r = [];
  
  r.push(`      ─━━━━━━━━━${config.whiteBg}Ready${config.end}━━━━━━━━━─`)
r.push(`         ${config.green}Client${end}: ${config.purple}${c.user.tag}${config.end}`)
r.push(`         ${config.green}Ping${end}: ${config.gray}${c.ws.ping}${config.end} ms`)
r.push(`         ${config.green}Ready${end}: ${config.skyBlue}true${config.end}`)
r.push(`         ${config.green}Bot Creator${end}: ${config.red}${(await c.application.fetch()).owner.username + '#' + (await c.application.fetch()).owner.discriminator}${config.end}`)
r.push(`         ${config.green}Guilds${end}: ${config.gray}${this.bot.guilds.cache.size}${config.end}`)
r.push(`         ${config.green}Commands loaded${end}: ${config.gray}${this.bot.cmd.default.size}${config.end}`)
r.push(`      ─━━━${config.whiteBg}Created by Ghost${end}━━━━─`)

console.log(r.join('\n'))
    }, 1500)
   });
  }
}

  
// VARIABLES //
loadVariables(path) {
let variables = require(resolve(this.basePath, path)),
startTime = Date.now();
let output = [];
// console.log(`Loading Variables [${Object.keys(variables).length}]`)

console.log(`──────────────${config.whiteBg}Loading Variables${config.end}───────────────`)
  
output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}' ${end}${('─').repeat(28 - path.length)}┐\n│                                            │`);
let total = 0
for (let variable in variables) {
 let type = typeof variables[variable]
  total += 1
output.push(`│     ${green}• Loaded${end} │ \u001b[36m${variable}${end}${(' ').repeat(18 - variable.length)}│ ${type === 'string' ? '\u001b[35m' : type === 'number' ? '\u001b[38;2;255;0;0m' : type === 'boolean' ? '\u001b[33m' : ''}${type}${end}${type == 'boolean'? ' ' : '  '}│`)
    }
output.push("│                                            │\n└────────────────────────────────────────────┘");
  
this.bot.variables(variables)
console.log(output.join("\n"))
  
console.log(`───────── Loaded ${total} Variables in ${Date.now() - startTime}ms ${'─'.repeat(35 - (`Loaded ${total} Variables in ${Date.now() - startTime}ms`).length)}\n\n`);
  }


// STATUS //
loadStatus(path) {
const file = require(resolve(this.basePath, path));
let startTime = Date.now();
const output = [];
console.log(`──────────────\u001b\[7mLoading Status${end}──────────────────`)
  
output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}' ${end}${('─').repeat(28 - path.length)}┐`);
  
let i = 1;
for (let status of file.statuses) {
let l;
try {
  this.bot.status({
    text: status?.text,
     type: status?.type.toUpperCase(),
      time: status?.time
});
output.push(`│                                            │\n│     ${green}• Loaded Status ${i}${end}${(' ').repeat(23 - (i.toString()).length)}│`)

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

// VOICE COMMAND client

loadVoice(path) {
const exPath = resolve(this.basePath, path) + '/'
  const validTypes = Object.getOwnPropertyNames(this.voice.cmds);
  const folders = readdirSync(exPath, { withFileTypes: true })
    .map((dirent) => dirent.name);

  console.log(`──────────────\u001b\[7mLoading Commands${end}────────────────`);

  let startTime = Date.now();
  let output = [];
  let total = 0;


  for (let folder of folders) {
    if (folder.endsWith('.js')) {
      output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${end} ${'─'.repeat(28 - path.length)}┐`);
      const cmdPath = exPath + folder;
      let command;

      try {
        command = require(cmdPath);
        output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${folder}${end}${(' ').repeat(29 - folder.length)}│`);
      } catch (e) {
        let pathh = `'${path}${folder}'`;
        output.push(`│     ${failed} ${pathh}${end}${(' ').repeat(30 - (path + folder).length)}│`);
        continue;
      }

      if (!command) {
        continue;
      }

      command = Array.isArray(command) ? command : [command];

      for (let cmd of command) {
        if (!("type" in cmd)) cmd.type = "default";
        const valid = validTypes.includes(cmd.type);

        if (!valid) {
          output.push(`│     ${loaded} ${cmd.name}${end}${(' ').repeat(30 - (cmd.name).length)}│`);
          continue;
        }

        try {
          this.voice.cmds.createCommand(cmd);
          output.push(`│       ${loaded} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name).length)}│`);
          total += 1;
        } catch (e) {
          output.push(`│       ${failed} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
      
    } else {
      let pathh = `'${path}${folder}'`;

      output.push(`┌──── \x1b[38;2;0;255;255mLoading ${pathh}${end} ${'─'.repeat(30 - pathh.length)}┐`);

      const files = readdirSync(exPath + folder);

      if (files.length === 0) {
        output.push(`│     \u001b[38;2;255;0;0mNo files found in this folder${end}${(' ').repeat(10)}│`);
        output.push("│                                            │\n└────────────────────────────────────────────┘");
        continue;
      }

      for (let file of files) {
        const cmdPath = exPath + folder + "/" + file;

        let command;
        try {
          command = require(cmdPath);
          output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${file}${end}${(' ').repeat(29 - file.length)}│`);
        } catch (e) {
          let pathh = `'${path}${file}'`;
          output.push(`│     ${failed} ${pathh}${end}${(' ').repeat(30 - pathh.length)}│`);
          continue;
        }

        if (!command) {
          continue;
        }

        command = Array.isArray(command) ? command : [command];

        for (let cmd of command) {
          if (!("type" in cmd)) cmd.type = "default";
          const valid = validTypes.includes(cmd.type);

          if (!valid) {
            output.push(`│     ${loaded} ${cmd.name}${end}${(' ').repeat(30 - (cmd.name).length)}│`);
            continue;
          }

          try {
            this.voice.cmds.createCommand(cmd);
            output.push(`│       ${loaded} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
            total += 1;
          } catch (e) {
            output.push(`│       ${failed} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
          }
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
    }
  }

console.log(output.join("\n"));
console.log(`──── Loaded ${total} successful client music in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful commands in ${Date.now() - startTime}ms`).length)}\n\n`);
}
  
// COMMANDS //
loadCommands(path) {
const exPath = resolve(this.basePath, path) + '/'
  const validTypes = Object.getOwnPropertyNames(this.bot.cmd);
  const folders = readdirSync(exPath, { withFileTypes: true })
    .map((dirent) => dirent.name);

  console.log(`──────────────\u001b\[7mLoading COMMAND${end}────────────────`);

  let startTime = Date.now();
  let output = [];
  let total = 0;


  for (let folder of folders) {
    if (folder.endsWith('.js')) {
      output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${end} ${'─'.repeat(28 - path.length)}┐`);
      const cmdPath = exPath + folder;
      let command;

      try {
        command = require(cmdPath);
        output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${folder}${end}${(' ').repeat(29 - folder.length)}│`);
      } catch (e) {
        let pathh = `'${path}${folder}'`;
        output.push(`│     ${failed} ${pathh}${end}${(' ').repeat(30 - (path + folder).length)}│`);
        continue;
      }

      if (!command) {
        continue;
      }

      command = Array.isArray(command) ? command : [command];

      for (let cmd of command) {
        if (!("type" in cmd)) cmd.type = "default";
        const valid = validTypes.includes(cmd.type);

        if (!valid) {
          output.push(`│     ${loaded} ${cmd.name}${end}${(' ').repeat(30 - (cmd.name).length)}│`);
          continue;
        }

        try {
          this.bot.cmd.createCommand(cmd);
          output.push(`│       ${loaded} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name).length)}│`);
          total += 1;
        } catch (e) {
          output.push(`│       ${failed} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
      
    } else {
      let pathh = `'${path}${folder}'`;

      output.push(`┌──── \x1b[38;2;0;255;255mLoading ${pathh}${end} ${'─'.repeat(30 - pathh.length)}┐`);

      const files = readdirSync(exPath + folder);

      if (files.length === 0) {
        output.push(`│     \u001b[38;2;255;0;0mNo files found in this folder${end}${(' ').repeat(10)}│`);
        output.push("│                                            │\n└────────────────────────────────────────────┘");
        continue;
      }

      for (let file of files) {
        const cmdPath = exPath + folder + "/" + file;

        let command;
        try {
          command = require(cmdPath);
          output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${file}${end}${(' ').repeat(29 - file.length)}│`);
        } catch (e) {
          let pathh = `'${path}${file}'`;
          output.push(`│     ${failed} ${pathh}${end}${(' ').repeat(30 - pathh.length)}│`);
          continue;
        }

        if (!command) {
          continue;
        }

        command = Array.isArray(command) ? command : [command];

        for (let cmd of command) {
          if (!("type" in cmd)) cmd.type = "default";
          const valid = validTypes.includes(cmd.type);

          if (!valid) {
            output.push(`│     ${loaded} ${cmd.name}${end}${(' ').repeat(30 - (cmd.name).length)}│`);
            continue;
          }

          try {
            this.bot.cmd.createCommand(cmd);
            output.push(`│       ${loaded} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
            total += 1;
          } catch (e) {
            output.push(`│       ${failed} ${cmd.name}${end}${(' ').repeat(28 - (cmd.name ? cmd.name : 'undefined').length)}│`);
          }
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
    }
  }

console.log(output.join("\n"));
console.log(`──── Loaded ${total} successful commands in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful commands in ${Date.now() - startTime}ms`).length)}\n\n`);
}







loadEvents(path) {
const exPath = resolve(this.basePath, path) + '/'
const events = []
  readdirSync(exPath).map((event)=> {
    if(event.endsWith('.js')) {
      events.push(event)
    }
  })
const validEvent = Object.getOwnPropertyNames(this.bot._events);
const startTime = Date.now();

console.log(`──────────────\u001b\[7mLoading Events${end}────────────────`);

const output = [];
let total = 0;
output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${end} ${'─'.repeat(28 - path.length)}┐\n│                                            │`);

for (let event of events) {
const name = event.split('.')[0].slice(2, (event.split('.')[0]).length).toLowerCase()

const cmd = require(exPath + event)
try {
  
if (!cmd.type || cmd.type === '' || !validEvent.includes(cmd.type)){
  output.push(`│     \u001b[38;2;255;0;0m• Failed ${event}${end}${(' ').repeat(30 - event.length)}│`)


if (!cmd.type || cmd.type === '') {
output.push(`│       - Event type not provided            │`)
} else if (!validEvent.includes(cmd.type))
{
  output.push(`│       - "${cmd.type}" is not valid event${(' ').repeat(14 - cmd.type.length)}│`)
}
}
else {
this.bot.cmd.createCommand(cmd)
total += 1;
output.push(`│     ${config.green}• Loaded${end} ${event}${(' ').repeat(30 - event.length)}│\n│       - Type: on${(cmd.type).charAt(0).toUpperCase() + (cmd.type).slice(1)}${(' ').repeat(27 - ((cmd.type).charAt(0).toUpperCase() +(cmd.type).slice(1)).length)}│`)
 }

}
catch (error) {}

}
  
output.push("│                                            │\n└────────────────────────────────────────────┘");
  
console.log(output.join('\n'))
  
console.log(`──── Loaded ${total} successful events in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful events in ${Date.now() - startTime}ms`).length)}\n\n`);

  }




loadFunctions(path) {
const exPath = resolve(this.basePath, path) + '/'
const funcs = [];

readdirSync(exPath).map(x => !x.endsWith('.js') ? readdirSync(exPath + x).forEach(y => funcs.push(exPath + x + '/' + y)) : funcs.push(exPath + x));

let startTime = Date.now();
let output = [];
let total = 0;

console.log(`───────────\u001b\[7mLoading Custom Function${end}────────────`);

output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${end} ${'─'.repeat(28 - path.length)}┐\n│                                            │`);
  
for (let func of funcs) {
let f = func.split("/")[func.split("/").length - 1].split('.')[0];
let o = require(func);

let ty = "";
let color = ''
if( o.type == "djs") {
    ty = 'D.js'
  color = '\u001b[38;2;255;229;0m'
} else if ( o.type == "aoi.js") {
    ty = 'Aoi.js'
  color = '\u001b[38;2;0;208;255m'
} else if (o.type == undefined || o.type == '') {
    ty = 'Invalid'
  color = '\u001b[38;2;255;0;0m'
}

try {
if ( o.type == 'undefined' && !o.code) {
  output.push(`│     \u001b[38;2;255;0;0m• Failed${end} │ \u001b[36m$${f}${end}${(' ').repeat(17 - f.length)}│ ${color}${ty}${end}${(' ').repeat((ty == 'D.js'? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
} else {
total += 1;
this.bot.functionManager.createFunction({
  name: `$${f}`,
  type: o.type,
  code: o.code
  })

output.push(`│     \u001b[38;2;4;255;0m• Loaded${end} │ \u001b[36m$${f}${end}${(' ').repeat(17 - f.length)}│ ${color}${ty}${end}${(' ').repeat((ty == 'D.js'? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
}

} catch (error) {
output.push(`│     \u001b[38;2;255;0;0m• Failed${end} │ \u001b[36m$${f}${end}${(' ').repeat(17 - f.length)}│ \u001b[38;2;255;0;0m${ty}${end}${(' ').repeat((ty == 'D.js'? 8 : ty == 'Aoi.js' ? 8 : 8) - ty.length)}│`)
console.log(error)

  }
} 
output.push("│                                            │\n└────────────────────────────────────────────┘");
console.log(output.join('\n'))

console.log(`──── Loaded ${total} successful functions in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful functions in ${Date.now() - startTime}ms`).length)}\n\n`);
  }


}
module.exports = { 
  Handler,
};
