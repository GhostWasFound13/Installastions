module.exports = async (d) => {
    const functionName = "$advRandomText";
    const data = d.util.aoiFunc(d);
    const [words, numb = 1] = data.inside.splits;

    if (!words) {
        const emptyVariable = 'Words';
        return d.aoiError.fnError(d, "custom", {}, `Words were not provided`);
    } else {
        let wordArr = words.split(':');
        let num = numb > wordArr.length ? wordArr.length : numb;
        const randWords = [];
        for (let i = 0; i < num; i++) {
            let newRandom;
            do {
                let rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));

            randWords.push(newRandom);
        }
        const output = randWords.join(', ');

        data.result = output;
    }

    return {
        code: d.util.setCode(data),
    };
};
