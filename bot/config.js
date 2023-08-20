module.exports = {
/*                     
              _   _         _                       _       _       
             (_) (_)       | |                     | |     | |      
   __ _  ___  _   _ ___    | |_ ___ _ __ ___  _ __ | | __ _| |_ ___ 
  / _` |/ _ \| | | / __|   | __/ _ | '_ ` _ \| '_ \| |/ _` | __/ _ \
 | (_| | (_) | |_| \__ \   | ||  __| | | | | | |_) | | (_| | ||  __/
  \__,_|\___/|_(_| |___/    \__\___|_| |_| |_| .__/|_|\__,_|\__\___|
                _/ |                         | |                    
               |__/                          |_|     

      - aoi.js setup (complicated) -
*/
    "token": process.env.TOKEN, // Your super secret client token, when using replit use token: process.env.token and create a secret with your token in it instead for safety purposes.
    "prefix": "a!", // The prefix your bot will respond to, can be multiple for example ["!", "?"], so the bot would respond to ?ping and !ping
    "intents": ["Guilds", "GuildMessages", "MessageContent", "GuildVoiceStates"], // Array of intents used for your bot, list can be found here: https://aoi.js.org/docs/guides/permissionsandintents
    "events": ["onMessage", "onInteractionCreate"], // Array of events used for your bot, list can be found here: https://aoi.js.org/docs/guides/events
  };
