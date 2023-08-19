module.exports = async (d) => {
        const data = d.util.aoiFunc(d);
        const [from = "auto", to = "en", text = "Text"] = data.inside.splits;

        async function translate() {
            let request = await fetch(`https://ild.vercel.app/api/translate?from=${from}&to=${to}&text=${text}`);

            let result = await request.json()
            return result.output;
        }

        data.result = await translate();

        return {
            code: d.util.setCode(data)
        };
    }
