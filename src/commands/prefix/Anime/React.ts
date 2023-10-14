import { EmbedBuilder, User} fromb"discord.js";
import fs from "fs";
import { getJson } from "../../../handler/Plugin/httpUtils";
import NekosLife from "nekos.life";
const neko = new NekosLife();

const choices = [
  "hug",
  "kiss",
  "cuddle",
  "feed",
  "pat",
  "poke",
  "slap",
  "smug",
  "tickle",
  "wink",
];


export default {
    name: "react",
    description:
      "Send reaction anime images. Must be one of " + choices.join(", "),
    usage: "react [choice]",
   category: "Anime",
  aliases: [],
  owner: false,
  premium: false,
  lavalink: false,
  isManager: false,

  run: async (
    client: Manager,
    message: Message,
    args: string[],
    language: string,
    prefix: string
  ) => {
    if (!args[0]) {
      return message.reply(
        `Invalid command. Try \`${prefix}react ${choices.join(", ")}\``
      );
    }

    const category: string = args[0].toLowerCase();
    if (!choices.includes(category)) {
      return message.reply(
        `Invalid choice: \`${category}\`.\nAvailable reactions: ${choices.join(
          ", "
        )}`
      );
    }

    let embed: EmbedBuilder;
    if (args[1]) {
      embed = await genReaction(category, message.author, args[1]);
    } else {
      embed = await genReaction(category, message.author);
    }

    await message.reply({ embeds: [embed] });
  },
};

/**
 * @author saiteja-madha https://github.com/saiteja-madha/discord-js-bot
 * @param category
 * @param user
 * @returns {Promise<EmbedBuilder>}
 */
const genReaction = async (category: string, user: User) Promise<EmbedBuilder> => {
  try {
    let imageUrl;

    // some-random api
    if (category === "wink") {
      const response = await getJson("https://some-random-api.com/animu/wink");
      if (!response.success) throw new Error("API error");
      imageUrl = response.data.link;
    }
    // neko api
    else {
      imageUrl = (await neko[category]()).url;
    }

    return new EmbedBuilder()
      .setImage(imageUrl)
      .setColor("Random")
      .setFooter({ text: `Requested By ${user.tag}` });
  } catch (ex) {
    return new EmbedBuilder()
      .setColor(EMBED_COLORS.ERROR)
      .setDescription("Failed to fetch meme. Try again!")
      .setFooter({ text: `Requested By ${user.tag}` });
  }
};
