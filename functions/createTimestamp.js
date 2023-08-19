module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
        const [time, type = "R", a = "+"] = data.inside.splits;

        async function exc(func) {
            let p = await d.interpreter(d.client, {}, [], { code: func }, d.client.db, true);
            return p.code;
        }

        const b = Math.floor(Date.now() / 1000);
        const e = Math.floor(await exc(`$parseTime[${time}]`) / 1000);

        async function exp(a) {
            switch (a) {
                case "+":
                    return b + e;
                    break;
                case "-":
                    return b - e;
                    break;
            }
        }

        const [shorttime, longtime, shortdate, longdate, shortdatetime, longdatetime, relative] = ['t', 'T', 'd', 'D', 'f', 'F', 'R'];

        data.result = `<t:${await exp(a)}:${eval(type.toLowerCase())}>`;

    return { code: d.util.setCode(data) };
}
