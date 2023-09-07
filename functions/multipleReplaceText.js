module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [text, replacements] = data.inside.splits;
    const replacementsList = replacements.split(',');
 //  $multipleReplaceText[text;replacer1 --> replaceto1, replacer2 --> replaceto2...]
    let resultText = text;
  
    for (const replacementPair of replacementsList) {
      const [oldWord, newWord] = replacementPair.split('-->');
      const regex = new RegExp(oldWord.trim(), 'g');
      resultText = resultText.replace(regex, newWord.trim());
    }
  
    data.result = resultText;
    return {
      code: d.util.setCode(data),
    };
  },
});
