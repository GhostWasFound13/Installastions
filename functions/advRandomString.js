module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [length, type = "random"] = data.inside.splits;

    let characters = '';

    if (type === 'string') {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    } else if (type === 'number') {
        characters = '0123456789';
    } else if (type === 'special') {
        characters = '!@#$%^&*()-_+=<>?';
    } else if (type === 'random') {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?';
    } else {
        throw new Error('Invalid type. Please use "string", "number", "special", or "random".');
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    data.result = result;

    return { code: d.util.setCode(data) };
};
