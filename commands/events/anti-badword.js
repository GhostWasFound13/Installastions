module.exports = {
name: "$alwaysExecute",
code: `
$deleteCommand
<@$authorID> Please refrain from swearing!

$onlyIf[$djsEval[const BadWordsNext = require('bad-words-next')
const en = require('bad-words-next/data/en.json')
const badwords = new BadWordsNext({ data: en })
badwords.check(\`$message\`);true]==true]

$onlyIf[$checkCondition[$message!=||$isBot[$authorID]==false]==true;]

$suppressErrors
`
}
