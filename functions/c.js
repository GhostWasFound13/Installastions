// Comment function
module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [comment] = data.inside.splits;
    return {
        code: d.util.setCode(data),
    };
};
