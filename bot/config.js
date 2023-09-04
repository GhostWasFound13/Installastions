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
    "token": process.env.token, // Your super secret client token, when using replit use token: process.env.token and create a secret with your token in it instead for safety purposes.
    "prefix": "$getGuildVar[prefix]",// The prefix your bot will respond to, can be multiple for example ["!", "?"], so the bot would respond to ?ping and !ping
   "intents": ["MessageContent",
    "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping",
            ],
    "events": ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onGuildJoin", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onWebhookUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate", "onInteractionCreate",
            ],
  soundcloudClientId: "", //soundcloud id client put it
  username: ["GhostMaster1","mod_Installastins"],
  password: ["MrGhostBG13","CLASS_123"],
};
