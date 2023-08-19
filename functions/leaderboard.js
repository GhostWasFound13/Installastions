module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [
        variable,
        sep = `
        `,
        type,
        sort = "asc",
        from = 1,
        to = 10,
        format,
        table = d.client.db.tables[0],
    ] = data.inside.splits;
    let text = "";

    if (type == "guild" || type == "globalUser") {
        const db = await d.client.db.all(table, variable.addBrackets(), 1);
        db.sort((a, b) => (sort === "asc" ? a.value - b.value : b.value - a.value));

        const guildDB = [];
        const globalUserDB = [];

        for (const [y, x] of db.entries()) {
            const id = x.key.replace(`${variable}_`, '');

            if (type == "guild") {
                const guild = await d.client.guilds.cache.get(id);
                if (guild) guildDB.push(x);
            } else if (type == "globalUser") {
                const user = await d.util.getUser(d, id);
                if (user) globalUserDB.push(x);
            }
        }

        const db2 = (type === 'guild' ? guildDB : globalUserDB).slice(from - 1, to)

        for (const [y, x] of db2.entries()) {
            const id = x.key.replace(`${variable}_`, '');

            if (type === "guild") {
                const guild = await d.client.guilds.cache.get(id);
                if (guild) {
                    text += `${format
                    .replace('{pos}', y + 1)
                    .replace('{id}', id)
                    .replace('{value}', x.value)
                    .replace('{name}', guild.name)
                }${sep}`;
                }
            } else if (type === "globalUser") {
                const user = await d.util.getUser(d, id);
                if (user) {
                    text += `${format
                    .replace('{pos}', y + 1)
                    .replace('{id}', id)
                    .replace('{value}', x.value)
                    .replace('{name}', user.username)
                    .replace('{mention}', `<@${id}>`)
                    .replace('{url}', `https://discord.com/users/${id}`)
                    .replace('{usertag}', `${user.username}#${user.discriminator}`)}${sep}`;
                }
            }
        }

    } else if (type == "user") {
        const db = await d.client.db.all(table, variable.addBrackets(), 2);

        db.sort((a, b) => (sort === "asc" ? a.value - b.value : b.value - a.value));

        userDB = db.filter(x => x.key.endsWith(`_${d.guild.id}`))
        const Db = userDB.slice(from - 1, to)

        for (const [y, x] of Db.entries()) {
            const id = x.key
                .replace(`${variable}_`, '')
                .replace(`_${d.guild.id}`, '')
            const user = await d.util.getMember(d.guild, id);

            if (user) {
                text += `${format
                    .replace('{pos}', y + 1)
                    .replace('{id}', id)
                    .replace('{value}', x.value)
                    .replace('{name}', user.user.username)
                    .replace('{nick}', (user.nickname) ? (user.nickname) : (user.user.username))
                    .replace('{mention}', `<@${id}>`)
                    .replace('{url}', `https://discord.com/users/${id}`)
                    .replace('{usertag}', `${user.user.username}#${user.user.discriminator}`)}${sep}`;
            }
        }
    }

    data.result = text;
    return { code: d.util.setCode(data) };
};