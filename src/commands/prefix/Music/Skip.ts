import { EmbedBuilder, Message } from "discord.js";
import { Manager } from "../../../manager.js";

// Main code
export default {
  name: "skip",
  description: "Skips the song currently playing.",
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
            `${client.i18n.get(language, "music", "skip_loading")}`
          )
          .setColor(client.color),
      ],
    });

    const player = client.manager.players.get(message.guild!.id);
    if (!player)
      return msg.edit({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "noplayer", "no_player")}`
            )
            .setColor(client.color),
        ],
      });
    const { channel } = message.member!.voice;
    if (
      !channel ||
      message.member!.voice.channel !== message.guild!.members.me!.voice.channel
    )
      return msg.edit({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "noplayer", "no_voice")}`
            )
            .setColor(client.color),
        ],
      });
    const current = player.queue.current;

    if (player.queue.size == 0) {
      await player.destroy();
      await client.UpdateMusic(player);

      const skipped = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "skip_msg")}`)
        .setColor(client.color);

      msg.edit({ content: " ", embeds: [skipped] });
    } else {
      await player.skip();

      const skipped = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "skip_msg")}`)
        .setColor(client.color);

      msg.edit({ content: " ", embeds: [skipped] });
    }
  },
};
