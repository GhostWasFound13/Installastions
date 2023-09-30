import { Message } from "discord.js";
import { Manager } from "../../manager.js";

export default async (client: Manager, message: Message) => {
  if (message.channel.name === "chatbot") {
    try {
      if (message.author.bot) return;
      message.channel.sendTyping();
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Hello, I'm chatbot based on Openai GPT-3 API\n${message.content}`,
        temperature: 0.9,
        max_tokens: 400,
      });
      console.log(`${response.data.choices[0].text}`);
      if (response.data.choices[0].text.trim() !== '') {
        message.reply(`${response.data.choices[0].text}`);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  }
};
