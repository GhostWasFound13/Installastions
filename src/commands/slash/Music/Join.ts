import { EmbedBuilder, CommandInteraction, GuildMember } from "discord.js";
import { Manager } from "../../../manager.js";

// Main code
export default {
  name: ["join"],
  description: "Make the bot join the voice channel.",
  category: "Music",
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
            `${client.i18n.get(language, "music", "join_loading")}`
          )
          .setColor(client.color),
      ],
    });

    const { channel } = (interaction.member as GuildMember)!.voice;
    if (!channel)
      return msg.edit({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "noplayer", "no_voice")}`
            )
            .setColor(client.color),
        ],
      });

    await client.manager.createPlayer({
      guildId: interaction.guild!.id,
      voiceId: (interaction.member as GuildMember).voice.channel!.id,
      textId: interaction.channel!.id,
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
