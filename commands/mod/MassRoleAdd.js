const { parseTime } = require('../../handler/func.js')

module.exports = [{
    name: "role all",
    description: "Adds a specified role to every user.",
    category: "moderation",
    usage: "{prefix} role all @role",
    code: `

$djsEval[
const roleID = '$findRole[$message]';
let rc = 0;
let fc = 0;
channel.send(\`Total members: \${guild.members.cache.size}, Estimated time: \${(guild.members.cache.size * 864.8)/1000} seconds\`)
let st = Date.now();

const promises = [];
guild.members.cache.forEach(async member => {
  promises.push(
    member.roles
      .remove(roleID, 'Mass role remove')
      .then(() => rc++)
      .catch(() => fc++)
  );
});

Promise.all(promises).then(() => {
  message.channel.send(\`Successfully removed the role from \${rc} members, failed on \${fc} members. Time taken: \${Math.floor((Date.now() - st)/1000)} seconds\`);
});
;false]

    `
}]
