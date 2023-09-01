const { EmbedBuilder } = require("discord.js")

module.exports = async (bot, player) => {
    const channel = bot.channels.cache.get(player.textId);
    if (!channel) return;
    
    if (player.data.get("stay")) return;

    const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setDescription("Queue is Empty!")
    
    channel.send({ embeds: [embed] });
    return player.destroy();
}
