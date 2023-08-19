module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [guildID = d.guild?.id, memberId = d.author?.id, reason = "Timeout Remove"] = data.inside.splits;

    const guild = await d.util.getGuild(d, guildID);
    const member = await d.util.getMember(guild, memberId);

    if (!guild || !member) {
        return d.aoiError.fnError(d, !guild ? 'guild' : 'member', { inside: data.inside });
    }

    const mem = await member.timeout(1, reason).catch((err) => {
        return d.aoiError.fnError(d, "custom", {}, `Failed To unTimeout The Member With Reason: ${err}`);
    });

    return {
        code: d.util.setCode(data),
    };
};
