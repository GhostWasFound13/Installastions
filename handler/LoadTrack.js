const { readdirSync } = require("fs");

module.exports = async (bot) => {
    try {
        readdirSync("./events/track/").forEach(file => {
            const event = require(`../events/track/${file}`);
            let eventName = file.split(".")[0];
            bot.manager.on(eventName, event.bind(null, client));
        });
    } catch (e) {
      //  console.log(e);
    }
};
