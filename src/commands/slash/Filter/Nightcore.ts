import { CommandInteraction, GuildMember } from "discord.js";
import { Manager } from "../../../manager.js";

import { EmbedBuilder } from "discord.js";
import delay from "delay";

export default {
  name: ["filter", "nightcore"],
  description: "Turning on nightcore filter",
  category: "Filter",
  owner: false,
  premium: false,
  lavalink: true,
  isManager: false,
  run: async (
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) => {
    await interaction.deferReply({ ephemeral: false });

    const msg = await interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            `${client.i18n.get(language, "filters", "filter_loading", {
              name: "nightcore",
            })}`
          )
          .setColor(client.color),
      ],
    });

    const player = client.manager.players.get(interaction.guild!.id);
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
    const { channel } = (interaction.member as GuildMember)!.voice;
    if (
      !channel ||
      (interaction.member as GuildMember)!.voice.channel !==
        interaction.guild!.members.me!.voice.channel
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
    const data = {
      op: "filters",
      guildId: interaction.guild!.id,
      timescale: {
        speed: 1.05,
        pitch: 1.125,
        rate: 1.05,
      },
    };

    await player["send"](data);

    const nightcored = new EmbedBuilder()
      .setDescription(
        `${client.i18n.get(language, "filters", "filter_on", {
          name: "nightcore",
        })}`
      )
      .setColor(client.color);

    await delay(2000);
    msg.edit({ content: " ", embeds: [nightcored] });
  },
};
