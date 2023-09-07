 
const { PluginManager } = require("aoi.js-library");
const aoijs = require("aoi.js")
const noblox = require('noblox.js')
const { setup, parse, createAst } = require("@akarui/aoi.parser");
const { parseExtraOptions, parseComponents } = require("@akarui/aoi.parser/components");

const {
  AoiVoice,
  PlayerEvents,
  PluginName,
  Cacher,
  Filter,
} = require(`@akarui/aoi.music`);
setup(aoijs.Util);
require('dotenv').config();
const {Panel} = require("@akarui/aoi.panel")

const config = require("./bot/config.js");
const { Handler } = require("./handler/handler.js");
const bot = new aoijs.AoiClient({
  token: config.token,
  prefix: config.prefix,
  events: config.events,
  intents: config.intents,
sharding: true,
aoiLogs: true,
aoiWarning: false, 
database : {
  type: "aoi.db",
  db: require("@akarui/aoi.db"),
  tables: ["databaseManager"],
  path: "./database/",
  extraOptions: {
      dbType: "KeyValue",
  }
},
 disableFunctions: ["$clientToken"]
})
// giveaway command functions \\
const fs = require('fs');

        const filename = 'giveaways.sql'; 
          if (!fs.existsSync(filename)) {
            fs.writeFileSync(filename, '{}', 'utf-8')}
    
// music functions \\
const voice = new AoiVoice(bot, {
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
  searchOptions: {
    soundcloudClientId: config.soundcloudClientId,

  },

});

voice.bindExecutor(bot.functionManager.interpreter);
voice.addEvent(PlayerEvents.TRACK_START);
voice.addEvent(PlayerEvents.TRACK_END);
voice.addEvent(PlayerEvents.QUEUE_END);
voice.addEvent(PlayerEvents.QUEUE_START);
voice.addEvent(PlayerEvents.AUDIO_ERROR);
voice.addEvent(PlayerEvents.TRACK_PAUSE);
voice.addEvent(PlayerEvents.TRACK_RESUME);
voice.addPlugin(PluginName.Cacher, new Cacher("disk" /* or "memory" */));
voice.addPlugin(PluginName.Filter, new Filter({
  filterFromStart: false,
}));
// control of handler in /handler/handler.js \\
const handler = new Handler({
  bot: bot,
  readyLog: true // To log ready or not
},
  __dirname
);

const panel = new Panel({
  port:3000,
  client:bot
})

panel.loadAPI({
  auth:" Authentication key here (random string)"//no spaces, keep it only alphanumeric...
})

panel.loadGUI({
  username:config.username,
  password: config.password,
})

bot.guildJoinCommand({//command
  channel: "",//the channel where <code> will be sent to
  code: `$cacheMembers[$guildID;no]`//message sent to <channel>
  });

  
  bot.joinCommand({ //command
    channel: "", //channel where it will log
    code: `$cacheMembers[$guildID;no]` //Message sent to <channel>
    })
/*
async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie as it is used to login to the account.
    const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5B029E92985F1C50C64C014DADDF1D4F96E3935A53D2E240528798DB3418BF8393DCF9547487747A41183B4F7C04FBF854AA6F552D10329C51ABD6DE1A590EE740CA870BFFE104BE8C508ECBEF6B02E1ADAD74BA7DA5D55BF8F4F114EB6B27A0C8E1C9C60F8A36C32651CAD25FFF1E8AF243D6A442C0220A26D1C1E753439952395F90334E7447679F37D7F234FFBC9964C21A832BE8428C1D5A56FC4693BE5D75D9D941C3F3EEF8A7DA0F1A6BCF687B582E44CF8764A98FA45CCF58A0E5D5349B4B4E1B8617B4DC578634E5E3B2C5F0FB28D0476C207EE641B75124DC336CCB099A2297587423CFA31671157BC142770447003E42D5F01F76B42441449A36FD1DB8B3059715B7C09FE8D237D1C7905A752F218050709C1C3FBA84FB95629D6A705CDC5585F73302DEBB53C38A6DEA1A2971872FFE0A7A30CF843C0EF2018EDEFBAB285BFEC3617A344C1235920CBB3999D0C13046D84CE63BAF6CF3E8C915E7E1663586300641DC6212E919054763B3F5A55C124421D0F5A2257CFFAA6C8CEE572E6EE4') 
    console.log(`Logged in main roblox account as ${currentUser.UserName} [${currentUser.UserID}]`)
  }
  startApp()
*/
bot.variables(require("./handler/variables.js"));
handler.loadMusicHandler(`./handler/voice`);
handler.loadCommands(`./commands`);
//handler.loadVariables(`./handler/variables.js`); // not working ....
//handler.loadEvents(`./events`);
handler.loadStatus(`./handler/status.js`);
handler.loadFunctions(`./functions`);
// Plugins (testing, for now)
new PluginManager(bot).loadPlugins(
    "fafa/fetchinvite",
    "jollyjolli/encodebase64",
    "jollyjolli/decodebase64"
)
 
 Util.parsers.ErrorHandler = parse;
Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
};
Util.parsers.ComponentParser = ( data ) => {
     return createAst( data ).children.map( parseComponents );
};
bot.functionManager.createFunction({
  name: "$callAwaited",
  type: "djs",
  code: async function(d) {
    const data = d.util.aoiFunc(d);
    if (data.err) return d.error(data.err);
    let [command] = data.inside.splits;
    if (command == undefined) return d.aoiError.fnError(d, "custom", {}, "Missing awaited command provided.",)
    const cmd = d.client.cmd.awaited.find((x) => x.name.toLowerCase() === command.toLowerCase());
    if (!cmd) return d.aoiError.fnError(d, "custom", {},  `Invalid awaited command: '${command}' provided.`,);
    await d.interpreter(
      d.client,
      d.message,
      d.args,
      cmd,
      d.client.db,
      false,
      undefined,
      d.data,
    );
    return {
      code: d.util.setCode(data),
    };
  }
});
bot.functionManager.createFunction(
    {
      name: "$lockThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId] = data.inside.splits;
  
        const thread = await d.message.client.channels.fetch(threadId);
  
        try {
          await thread.setLocked(true);

          return {
            code: d.util.setCode(data),
          };
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to lock thread');
        }
      },
    },
    {
      name: "$unlockThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId] = data.inside.splits;
  
        const thread = await d.message.client.channels.fetch(threadId);
  
        try {
          await thread.setLocked(false);

          return {
            code: d.util.setCode(data),
          };
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to unlock thread');
        }
      },
    },
    {
      name: "$renameThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId, newName] = data.inside.splits;
  
        try {
          const thread = await d.message.client.channels.fetch(threadId);
  
          await thread.setName(newName);

          return {
            code: d.util.setCode(data),
          };
          
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to rename thread');
        }
      },
    });
bot.awaitedCommand({
  name: "null",
  code: `$setGuildVar[auth;Null]
`
});

  bot.command({
    name: "deletedata",
    code: `
  $awaitMessages[$channelID;$authorID;15s;deletemydata;awaitedcommandexample;Time has ended] 
  $title[1;WARNING!!]
  $description[Type "deletemydata" without the commas you have 20 seconds this command will delete all data stored of you in the bot and of this server]
$color[1;#FF0000]
$onlyForIDs[964024743172915220;Not owner]`
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `$djsEval[message.guild.leave();]
    $wait[2s]
    **$channelSendMessage[$channelID;**Data deleted Thank you for using our bot <3 i'll leave the server now**;false]**
 $setGuildVar[placeId;Null]
    $setGuildVar[ServerId;Null]
    $setGuildVar[auth;Null]
    $setGuildVar[Cookie;Null]
    $setGuildVar[RankLimit;40]
  `
});
//Data deleted Thank you for using our bot <3 i'll leave the server now
