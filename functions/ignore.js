module.exports = d => {
    const data = d.util.aoiFunc(d);
    data.result = '';
    return {
        code: d.util.setCode(data)
    }
}