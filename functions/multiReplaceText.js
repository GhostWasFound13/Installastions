module.exports = async (d) => {
    const functionName = "$multiReplaceText";
    const data = d.util.aoiFunc(d);
    const [text, ...words] = data.inside.splits;

    const errorMessage =
        !text ? "No text" : !words[0] ? "Words to replace was not provided" : words.some(w => !w.includes(':')) ? "Usage, Separator was not provided" :
        null;

    if (errorMessage) {
        return d.aoiError.fnError(d, "custom", {}, `${errorMessage}`);
    } else {
        let output = text;
        words.forEach(word => {
            const [primary, secondary] = word.split(':');
            output = output.replace(new RegExp(primary, 'g'), secondary);
        });
        data.result = output;
    }

    return {
        code: d.util.setCode(data),
    };
};
