module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [link] = data.inside.splits;

    if (/^(https?:\/\/|www\.)/.test(link)) {
        data.result = "true";
    } else {
        data.result = "false";
    }

    return {
        code: d.util.setCode(data),
    };
};
