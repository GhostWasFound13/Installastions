// how to use $askGPT[openai;KEY;user;Hello]
// replace key like oajahaifuck 
// put hello to $message
module.exports = async (d) => {
        const axios = require("axios");
        const data = d.util.aoiFunc(d);
        const [ai = "openai", key, memoryType = "chat", message] = data.inside.splits;
        let parent;
        let memory;
        let result;
        if (memoryType) {
          if (memoryType.toLowerCase() === "chat") {
            if (d.guild) {
              if (d.guild.id)
                parent = "guild_" + d.guild.id;
            } else {
              if (d.channel) {
                if (d.channel.id)
                  parent = "channel_" + d.channel.id;
              }
            }
            ;
          } else if (memoryType.toLowerCase() === "user" || memoryType.toLowerCase() === "author") {
            if (d.message && d.message.author && d.message.author.id) {
              if (d.message.author.id)
                parent = "user_" + d.message.author.id;
            }
          }
        }
        if (ai) {
          if (ai.toLowerCase() === "openai" || ai.toLowerCase() === "chatgpt") {
            var testVar19G53408G = await d.client.db.get(d.client.db.tables[0], "openaiGPT", parent);
            if (testVar19G53408G && testVar19G53408G.value && testVar19G53408G.value !== "") {
              memory = await JSON.parse(testVar19G53408G.value);
            }
            const apiUrl = "https://api.openai.com/v1/chat/completions";
            const headers = {
              Authorization: `Bearer ${key}`
            };
            let postData;
            if (memory) {
              postData = {
                model: "gpt-3.5-turbo",
                messages: [
                  ...memory,
                  { role: "user", content: message }
                ],
                user: d.message.author.name
              };
            } else {
              postData = {
                model: "gpt-3.5-turbo",
                messages: [
                  { role: "user", content: message }
                ],
                user: d.message.author.name
              };
            }
            const response = await axios.post(apiUrl, postData, { headers });
            if (response && response.data && response.data.choices)
              result = response.data.choices[0].message.content.replace("@everyone", " ").replace("@here", " ");
            if (memory) {
              if (response && response.data && response.data.choices)
                var testVar15G16453G = await d.client.db.set(d.client.db.tables[0], "openaiGPT", parent, JSON.stringify([
                  ...memory,
                  { role: "user", content: message },
                  { role: "assistant", content: result }
                ]));
            } else {
              if (response && response.data && response.data.choices)
                var testVar15G16453G = await d.client.db.set(d.client.db.tables[0], "openaiGPT", parent, JSON.stringify([
                  { role: "user", content: message },
                  { role: "assistant", content: result }
                ]));
            }
          } else if (ai.toLowerCase() === "eden" || ai.toLowerCase() === "edenai" || ai.toLowerCase() === "eden-ai") {
            var testVar19G53408G = await d.client.db.get(d.client.db.tables[0], "edenAI", parent);
            if (testVar19G53408G && testVar19G53408G.value && testVar19G53408G.value !== "") {
              memory = await JSON.parse(testVar19G53408G.value);
            }
            var options1;
            if (memory) {
              options1 = {
                providers: "openai",
                text: message,
                previous_history: [
                  ...memory
                ]
              };
            } else {
              options1 = {
                providers: "openai",
                text: message
              };
            }
            const headers = {
              Authorization: `Bearer ${key}`
            };
            const response = await axios.post("https://api.edenai.run/v2/text/chat", options1, { headers });
            if (response && response.data && response.data.openai)
              result = response.data.openai.generated_text.replace("@everyone", " ").replace("@here", " ");
            if (memory) {
              if (response && response.data && response.data.openai && response.data.openai.generated_text)
                var testVar15G16453G = await d.client.db.set(d.client.db.tables[0], "edenAI", parent, JSON.stringify([
                  ...memory,
                  { role: "user", message },
                  { role: "assistant", message: result }
                ]));
            } else {
              if (response && response.data && response.data.openai && response.data.openai.generated_text)
                var testVar15G16453G = await d.client.db.set(d.client.db.tables[0], "edenAI", parent, JSON.stringify([
                  { role: "user", message },
                  { role: "assistant", message: result }
                ]));
            }
          }
        }
        ;
        data.result = result;
        return {
          code: d.util.setCode(data)
        };
      }
    
