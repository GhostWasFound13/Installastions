module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [arg] = data.inside.splits;

    const type = arg.split(':')[0];
    const value = arg.split(':')[1];

    const output = d.client.cmd.default
        .filter(x => x[type] == value)
        .map(x => x.name)
        .filter(x => x !== '$alwaysExecute')
        .join(", ");

    data.result = output;

    return { code: d.util.setCode(data) };
};
