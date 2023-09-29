import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Manager } from "../../../manager.js";

export default {
    name: "imagine",
    description: "Generate art in your dreams!",
      category: "Ai",
    options: [
        {
            name: "prompt",
            description: "Your prompt to generate the art",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) => {
        await interaction.deferReply()
        const prompt = interaction.options.getString("prompt")
        const Replicate = require('replicate')
        //const Replicate = (await import("replicate")).default

        const replicate = new Replicate({
            auth: "",
        });

        const output = await replicate.run("stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf", {
            input: {
                prompt: prompt
            }
        })

        console.log()
        
        const row = new ActionRowBuilder()
			.addComponents(
                new ButtonBuilder()
                .setLabel(`Download`)
                .setStyle(ButtonStyle.Link)
                .setURL(`${output}`),
               new ButtonBuilder()
                .setLabel(`Support Us`)
                .setStyle(ButtonStyle.Link)
                .setURL('https://paypal.me/officialrazer'))
            
        const embed = new EmbedBuilder()
        	.setTitle("**Your Prompt:**")
            .setDescription(`**${prompt}**`)
            .setImage(`${output}`)
        	.setColor('#2f3136')
        	.setFooter({ text: `Requested by: ${interaction.user.username} | ©️ Project Razer `,
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
                          })

        await interaction.editReply({ embeds: [embed], components: [row] })
	    
    }
}
