module.exports = async (d) => {
    const functionName = "$referenceUserId";
    const data = d.util.aoiFunc(d);
    const [messageId = ""] = data.inside.splits;

    const message = messageId ? await d.channel.messages.fetch(messageId) : d.message;

    let id = message.reference?.messageId;

    if (!id) {
        return d.aoiError.fnError(d, "custom", {}, `Message id`);
    } else {
        let msg = await d.channel.messages.fetch(id);
        let output = msg.author.id;
        data.result = output;
    }

    return {
        code: d.util.setCode(data),
    };
};
