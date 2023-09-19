module.exports = d => {
    const data = d.util.aoiFunc(d);
    const [ num1, num2 ] = data.inside.splits;

    data.result = (num2 * num1) / 100;
    return {
        code: d.util.setCode(data)
    }
}
