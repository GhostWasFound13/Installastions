import { CommandInteraction, EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteractionOptionResolver } from "discord.js";
import { Manager } from "../../../manager.js";
import models from '../../../plugins/models.js';
export default {
    name: ["imagine"],
    description: "Generate art in your dreams!",
      category: "Ai",
      owner: false,
      premium: false,
      lavalink: false,
     isManager: false,
    options: [
        {
            name: "prompt",
            description: "Your prompt to generate the art",
            type: ApplicationCommandOptionType.String,
            required: true
        },
	    {
	name: 'model',
        description: 'The image model',
        type: ApplicationCommandOptionType.String,
        choices: models,
        required: false,
		    {
    ],
    run: async (
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) => {
        await interaction.deferReply()
        const prompt = (interaction.options as CommandInteractionOptionResolver).getString("prompt");
        const model = (interaction.options as CommandInteractionOptionResolver).getString("model") || models[0].value;
	//const Replicate = require('replicate')
        //const Replicate = (await import("replicate")).default
          const { default: Replicate } = await import('replicate');
        const replicate = new Replicate({
            auth: process.env.imageApi,
        });

        const output = await replicate.run(model, { input: { prompt } });

        console.log()
        
        const row = new ActionRowBuilder<ButtonBuilder>()
			.addComponents(
                new ButtonBuilder()
                .setLabel(`Download`)
                .setStyle(ButtonStyle.Link)
                .setURL(`${output}`),
               new ButtonBuilder()
                .setLabel(`Support Us`)
                .setStyle(ButtonStyle.Link)
                .setURL('https://paypal.me/officialrazer'))
            
        const embed = new EmbedBuilder()       	.setTitle("**Your Prompt:**")
            .setDescription(`**${prompt}**`)
            .setImage(`${output}`)
        	.setColor(client.color)
        	.setFooter({ text: `Requested by: ${interaction.user.username} | ©️ Project Razer `,
                            iconURL: "https://i.imgur.com/AfFp7pu.png",
                          })

        await interaction.editReply({ embeds: [embed], components: [row] })
				    }
}
