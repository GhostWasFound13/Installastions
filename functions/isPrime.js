const { isPrime } = require('mathjs');
module.exports = d => {
    const data = d.util.aoiFunc(d);
    const [ num ] = data.inside.splits;

    data.result = isPrime(num);
    return {
        code: d.util.setCode(data)
    }
}