import { EmbedBuilder, Message } from "discord.js";
import delay from "delay";
import { Manager } from "../../../manager.js";

export default {
  name: "3d",
  description: "Turning on 3d filter",
  category: "Filter",
  usage: "",
  aliases: [],

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
            `${client.i18n.get(language, "filters", "filter_loading", {
              name: "3d",
            })}`,
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
            `${client.i18n.get(language, "noplayer", "no_player", {
              name: "3d",
            })}`,
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
            `${client.i18n.get(language, "noplayer", "no_voice", {
              name: "3d",
            })}`,
          )
          .setColor(client.color),
      ],
    });
    
    const data = {
      op: "filters",
      guildId: message.guild!.id,
      rotation: { rotationHz: 0.2 },
    };

    await player["send"](data);

    const embed = new EmbedBuilder()
      .setDescription(
        `${client.i18n.get(language, "filters", "filter_on", {
          name: "3d",
        })}`
      )
      .setColor(client.color);

    await delay(2000);
    msg.edit({ content: " ", embeds: [embed] });
  },
};
