module.exports = async (d) => {
    const functionName = "$removeNumbers";
    const data = d.util.aoiFunc(d);
    const [text] = data.inside.splits;

    if (!text) {
        const emptyVariable = 'Text';
        return d.aoiError.fnError(d, "custom", {}, `Text was not provided`);
    } else {
        const output = text.replace(/[^a-zA-Z]/g, "");
        data.result = output;
    }

    return {
        code: d.util.setCode(data),
    };
};
