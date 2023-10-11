import {
  EmbedBuilder,
  CommandInteraction,
  GuildMember,
  ApplicationCommandOptionType,
  CommandInteractionOptionResolver,
} from "discord.js";
import { Manager } from "../../../manager.js";
import { KazagumoLoop, KazagumoLoopMode } from "../../../types/Lavalink.js";

export default {
  name: ["loop"],
  description: "Loop song in queue type all/current!",
  category: "Music",
  owner: false,
  premium: false,
  lavalink: true,
  isManager: false,
  options: [
    {
      name: "type",
      description: "Type of loop",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: "Current",
          value: "current",
        },
        {
          name: "Queue",
          value: "queue",
        },
        {
          name: "None",
          value: "none",
        },
      ],
    },
  ],
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
            `${client.i18n.get(language, "music", "loop_loading")}`
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

    const mode = (interaction.options as CommandInteractionOptionResolver).get(
      "type"
    )!.value;

    if (mode == "current") {
      await player.setLoop(KazagumoLoop.track);
      const looped = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "loop_current")}`)
        .setColor(client.color);
      msg.edit({ content: " ", embeds: [looped] });
    } else if (mode == "queue") {
      await player.setLoop(KazagumoLoop.queue);
      const looped_queue = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "loop_all")}`)
        .setColor(client.color);
      msg.edit({ content: " ", embeds: [looped_queue] });
    } else if (mode === "none") {
      await player.setLoop(KazagumoLoop.none);
      const looped = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "unloop_all")}`)
        .setColor(client.color);
      msg.edit({ content: " ", embeds: [looped] });
    }
  },
};
