import { EmbedBuilder, Message } from "discord.js";
import { Manager } from "../../../manager.js";

// Main code
export default {
  name: "join",
  description: "Make the bot join the voice channel.",
  category: "Music",
  usage: "",
  aliases: [],
  owner: false,
  premium: false,
  lavalink: true,
  isManager: false,

  run: async (
    client: Manager,
    message: Message,
    args: string[],
    language: string,
    prefix: string
  ) => {
    const msg = await message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            `${client.i18n.get(language, "music", "join_loading")}`
          )
          .setColor(client.color),
      ],
    });
    const { channel } = message.member!.voice;
    if (!channel)
      return msg.edit({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "music", "join_voice")}`
            )
            .setColor(client.color),
        ],
      });

    await client.manager.createPlayer({
      guildId: message.guild!.id,
      voiceId: message.member!.voice.channel!.id,
      textId: message.channel.id,
      deaf: true,
    });

    const embed = new EmbedBuilder()
      .setDescription(
        `${client.i18n.get(language, "music", "join_msg", {
          channel: channel.name,
        })}`
      )
      .setColor(client.color);

    msg.edit({ content: " ", embeds: [embed] });
  },
};
