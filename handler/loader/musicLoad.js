const { resolve } = require('path');
const config = require('../config.js');
const {readdirSync} = require('fs');

const loadMusic = async (voice, basePath, path) => {
  const exPath = resolve(basePath, path) + '/';
  const validTypes = Object.getOwnPropertyNames(voice.cmds);
  const folders = readdirSync(exPath, { withFileTypes: true }).map((dirent) => dirent.name);

  console.log(`──────────────\u001b[7mLoading Commands${config.end}────────────────`);

  let startTime = Date.now();
  let output = [];
  let total = 0;

  for (let folder of folders) {
    if (folder.endsWith('.js')) {
      output.push(`┌──── \x1b[38;2;0;255;255mLoading '${path}'${config.end} ${'─'.repeat(28 - path.length)}┐`);
      const cmdsPath = exPath + folder;
      let command;

      try {
        command = require(cmdsPath);
        output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${folder}${config.end}${(' ').repeat(29 - folder.length)}│`);
      } catch (e) {
        let pathh = `'${path}${folder}'`;
        output.push(`│     ${config.failed} ${pathh}${config.end}${(' ').repeat(30 - (path + folder).length)}│`);
        continue;
      }

      if (!command) {
        continue;
      }

      command = Array.isArray(command) ? command : [command];

      for (let cmds of command) {
        if (!("type" in cmds) || !("name" in cmds)) cmds.type = "default";
        const valid = validTypes.includes(cmds.type);

        if (!valid) {
          output.push(`│     ${config.loaded} ${cmd.name}${config.end}${(' ').repeat(30 - (cmd.name).length)}│`);
          continue;
        }

        try {
          voice.cmds.createCommand(cmd);
          output.push(`│       ${config.loaded} ${cmds.name}${config.end}${(' ').repeat(28 - (cmds.name).length)}│`);
          total += 1;
        } catch (e) {
          output.push(`│       ${config.failed} ${cmds.name}${config.end}${(' ').repeat(28 - (cmds.name ? cmds.name : 'undefined').length)}│`);
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
    } else {
      let pathh = `'${path}${folder}'`;

      output.push(`┌──── \x1b[38;2;0;255;255mLoading ${pathh}${config.end} ${'─'.repeat(30 - pathh.length)}┐`);
      const files = readdirSync(exPath + folder);

      if (files.length === 0) {
        output.push(`│     \u001b[38;2;255;0;0mNo files found in this folder${config.end}${(' ').repeat(10)}│`);
        output.push("│                                            │\n└────────────────────────────────────────────┘");
        continue;
      }

      for (let file of files) {
        const cmdsLath = exPath + folder + "/" + file;

        let command;
        try {
          command = require(cmdsPath);
          output.push(`│                                            │\n│     \x1b[38;2;0;255;255m• Loading ${file}${config.end}${(' ').repeat(29 - file.length)}│`);
        } catch (e) {
          let pathh = `'${path}${file}'`;
          output.push(`│     ${config.failed} ${pathh}${config.end}${(' ').repeat(30 - pathh.length)}│`);
          continue;
        }

        if (!command) {
          continue;
        }

        command = Array.isArray(command) ? command : [command];

        for (let cmds of command) {
          if (!("type" in cmds)) cmds.type = "default";
          const valid = validTypes.includes(cmd.type);

          if (!valid) {
            output.push(`│     ${config.loaded} ${cmds.name}${config.end}${(' ').repeat(30 - (cmds.name).length)}│`);
            continue;
          }

          try {
            voice.cmds.createCommand(cmd);
            output.push(`│       ${config.loaded} ${cmds.name}${config.end}${(' ').repeat(28 - (cmds.name ? cmds.name : 'undefined').length)}│`);
            total += 1;
          } catch (e) {
            output.push(`│       ${config.failed} ${cmds.name}${config.end}${(' ').repeat(28 - (cmds.name ? cmds.name : 'undefined').length)}│`);
          }
        }
      }
      output.push("│                                            │\n└────────────────────────────────────────────┘");
    }
  }

  console.log(output.join("\n"));
  console.log(`──── Loaded ${total} successful commands in ${Date.now() - startTime}ms ${'─'.repeat(40 - (`Loaded ${total} successful commands in ${Date.now() - startTime}ms`).length)}\n\n`);
};

module.exports = {
  loadMusic
};
