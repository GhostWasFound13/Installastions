const math = require('mathjs')
module.exports = d => {
    const data = d.util.aoiFunc(d);
    const [num1, num2 = 2] = data.inside.splits;

    if (!num1) return d.aoiError.fnError(d, 'custom', {}, `Invalid number at ${num1}`);

    try {
        data.result = math.nthRoot(num1, num2);
    } catch (error) {
        return d.aoiError.fnError(d, 'custom', {}, `Invalid root at nthRoot(${num1}, ${num2})`);
    };

    return {
        code: d.util.setCode(data)
    };
}