// Used to execute code when giveaway ends


module.exports ={
  name: "giveawayEnd",
  type: "timeout",
  code:`

$editMessage[$timeoutData[message];🎊GIVEAWAY ENDED🎊{newEmbed:{title:$getEmbed[$timeoutData[channel];$timeoutData[message];1;title]}{color:Green}{footer:$getEmbed[$timeoutData[channel];$timeoutData[message];1;footertext]}
{description:Ended#COLON# <t#COLON#$truncate[$math[$datestamp/1000]]#COLON#R>\n$replaceText[$splitText[2];Pending!;$if[$get[winners]!=<@>;$get[winners];No winners]]}}
;$timeoutData[channel]]


$textSplit[$getEmbed[$timeoutData[channel];$timeoutData[message];1;description];>
]

$writeFile[$get[path];$removeObjectProperty[$get[key];$nonEscape[$get[data]]];utf8]
  $channelSendMessage[$timeoutData[channel];$nonEscape[$if[$get[winners]!=<@>;Congratulations $get[winners]! You won the [$getObjectProperty[$get[key].prize]](https://discord.com/channels/$timeoutData[guild]/$timeoutData[channel]/$timeoutData[message]);No winners for [$getObjectProperty[$get[key].prize]](https://discord.com/channels/$timeoutData[guild]/$timeoutData[channel]/$timeoutData[message])]]]

$let[winners;$djsEval[let w = "$get[ids]";
r = $getObjectProperty[$get[key].winners];
let a = w.split('|');
let n = Math.min(r, a.length);
let b = [];
while (b.length < n) {
  let nr = a[Math.floor(Math.random() * a.length)];
  if (!b.includes(nr)) b.push(nr);
}
const o = b.map(word => \`<@\${word}>\`).join(', ');
o;true]]


$let[ids;$replaceText[$replaceText[$getObjectProperty[$get[key].users];$clientID|;];$clientID;]]

$createObject[$nonEscape[$get[data]]]

$let[data;$readFile[$get[path]]]

$let[path;./giveaways.sql]
  
$let[key;a$timeoutData[guild]_$timeoutData[message]]
  `
}