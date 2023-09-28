import { EmbedBuilder, Message } from "discord.js";
import { Manager } from "../../../manager.js";
import { KazagumoTrack } from "kazagumo";

// Main code
export default {
  name: "remove-duplicate",
  description: "Remove duplicated song from queue",
  category: "Music",
  usage: "",
  aliases: ["rmd", "rm-dup"],

  run: async (
    client: Manager,
    message: Message,
    args: string[],
    language: string,
    prefix: string
  ) => {
    const msg = await message.channel.send(
      `${client.i18n.get(language, "music", "pause_loading")}`
    );
    const player = client.manager.players.get(message.guild!.id);

    if (!player)
      return msg.edit(`${client.i18n.get(language, "noplayer", "no_player")}`);
    const { channel } = message.member!.voice;

    if (
      !channel ||
      message.member!.voice.channel !== message.guild!.members.me!.voice.channel
    )
      return msg.edit(`${client.i18n.get(language, "noplayer", "no_voice")}`);

    let OriginalQueueLength = player.queue.length;

    for (let i = 0; i < player.queue.length; i++) {
      const element = player.queue[i];
      if (player.queue.current!.uri == element.uri) {
        const track_index = player.queue.indexOf(
          player.queue.current as KazagumoTrack
        );
        player.queue.splice(track_index, 1);
      }
    }

    const unique = [...new Map(player.queue.map((m) => [m.uri, m])).values()];

    player.queue.clear();
    player.queue.push(...unique);

    const embed = new EmbedBuilder()
      .setDescription(
        `${client.i18n.get(language, "music", "removetrack_duplicate_desc", {
          original: String(OriginalQueueLength),
          new: String(unique.length),
          removed: String(OriginalQueueLength - unique.length),
        })}`
      )
      .setColor(client.color);

    await msg.edit({ embeds: [embed] });

    OriginalQueueLength = 0;
    return;
  },
};
