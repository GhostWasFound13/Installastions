import { CommandInteraction } from "discord.js";
import { Manager } from "../../../manager.js";
import { EmbedBuilder, ApplicationCommandOptionType } from "discord.js";

export default {
  name: ["bonk"],
  description: "bonk a user",
  category: "Image",
  options: [
    {
      name: "user",
      description: "The mentioned user will get bonked.",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],
  run: async (
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) => {
    const target = await interaction.options.getUser('target');

        let image = 'https://media.tenor.com/Tg9jEwKCZVoAAAAd/bonk-mega-bonk.gif';
 
        const embed = new EmbedBuilder()
        .setColor('#2f3136')
        .setTitle(`${target.tag} got bonked!`)
        .setImage(`${image}`)
        .setFooter({ text: `aw man that hurts.`})
 
        await interaction.reply({ embeds: [embed] });
    }
  };
