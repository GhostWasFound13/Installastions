import {CommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Manager } from "../../../manager.js";

export default {
    name: ['prompts'],
    description: 'some helpful prompts for you to get started',
     category: "Ai",
  run: async (
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) => {
        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
        .setLabel("Visit for more Prompts")
        .setStyle(ButtonStyle.Link)
        .setURL("https://prompthero.com/openjourney-prompts")
        .setEmoji('1089552783339954246'),)  

      let pembed = new EmbedBuilder()
      .setTitle("Here are some trending prompts")

      .setColor(client.color)
    
    .setThumbnail('https://i.imgur.com/Cbs7ljR.png')
	  .setDescription(`
      <:next:1000472400049209385> mdjrny-v4 style, magic spell book sitting on a table in the catacombs, hypermaximalist, insanely detailed and intricate, octane render, unreal engine, 8k, by greg rutkowski and Peter Mohrbacher and magali villeneuve\n\n\
      <:next:1000472400049209385> mdjrny-v4 style, photo of a gorgeous blonde female in the style of stefan kostic, realistic, half body shot, sharp focus, 8 k high definition, insanely detailed, intricate, elegant, art by stanley lau and artgerm, extreme blur cherry blossoms background\n\n\
      <:next:1000472400049209385> mdjrny-v4 style, japanese style shrine on top of a misty mountain overgrown, hyper realistic, lush gnarly plants, 8 k, denoised, by greg rutkowski, tom bagshaw, james gurney cinematic lighting\n\n\
      <:next:1000472400049209385> mdjrny-v4 style, valley, fairytale treehouse village covered,, matte painting, highly detailed, dynamic lighting, cinematic, realism, realistic, photo real, sunset,detailed, high contrast, denoised, centered, michael whelan`)  
      .setFooter({
        text: `installastions v.0.5.0 is running progress`, 
        iconURL: ('https://i.imgur.com/Cbs7ljR.png')
    })
        interaction.reply({
          embeds: [pembed], components: [row] });
    },
};
