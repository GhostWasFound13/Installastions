const { readdirSync } = require("fs");
const {resolve} = require('path');
const { Events } = require('discord.js');


//Handlers//
const {loadVariables} = require('./handlers/variableLoad.js')
const {loadStatus} = require('./loader/statusLoad.js')
const {loadEvents} = require('./loader/eventLoad.js')
const {loadCommands} = require('./loader/commandLoad.js')
const {loadFunctions} = require('./loader/functionLoad.js')
const {loadMusic} = require('./loader/MusicLoad.js')




class Handler {
  constructor(bot, basePath) {
  this.bot = bot.bot;
  this.basePath = basePath
  const theme = bot.theme;
  const style = bot.style;
  const platform = bot.device;
  const ready = bot.readyLog

  

if ( ready ) { 
  require('./handlers/onReady.js').onReady(this.bot)
  }
}

  
// VARIABLES //
loadVariables(path) {
loadVariables(this.bot, this.basePath, path)
  }


// STATUS //
loadStatus(path) {
loadStatus(this.bot, this.basePath, path)
}



  
// COMMANDS //
loadCommands(path) {
loadCommands(this.bot, this.basePath, path)
}

// MUSIC COMMANDS //
  
loadMusic(path) {
loadMusic(this.bot, this.basePath, path)
}
  
// EVENTS //
loadEvents(path) {
loadEvents(this.bot, this.basePath, path)
}


// FUNCTIONS //
loadFunctions(path) {
loadFunctions(this.bot, this.basePath, path)
}


}
module.exports = { 
  Handler,
};
