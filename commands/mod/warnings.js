module.exports ={
  name: "cases",
  description: "Gives the list of warns that user has.",
  category: "moderation",
  usage: "{prefix}cases (@user:optional)",
  code:`
  
$author[$if[$get[user]==;All server warn cases;$username[$if[$get[user]==;$authorID;$get[user]]]'s warn cases]]

$description[$if[$get[texts]==;No warns till now#SEMI# clean records;$nonEscape[$get[texts]]]]


$let[texts;$djsEval[( async () => { const from = 0;
const to = 9; 
const user = "$get[user]"
const data = !user? $getGuildVar[cases] : $getUserVar[cases;$get[user]]

const keys = Object.keys(data);
const keyRange = keys.reverse().slice(from, to);
let text = '';

for (let i = 0; i < keyRange.length; i++) {
  text += \`**#\${keyRange[i]}**
- **Moderator:** \${await d.util.getUser(d, data[keyRange[i]].moderator).username} \\\`\${data[keyRange[i]].moderator}\\\`
- **User:** \${await d.util.getUser(d, data[keyRange[i]].user)} \\\`\${data[keyRange[i]].user}\\\`\`;
if(i + 1 !== keyRange.length)
{
text += \`
───────────────────────────────
\`
};
}

return text})();true]]
$color[Green]
$footer[$if[$get[user]==;server has $getGuildVar[warn] total warn cases!;user has warns total of $getUserVar[warn;$if[$get[user]==;$authorID;$get[user]]]]
{prefix}case view #id to view the warning!]
$addTimestamp

$let[user;$findMember[$message[1];false]]
   
  
  `
}