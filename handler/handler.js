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
  constructor(client, basePath) {
  this.client = client.client;
  this.basePath = basePath
  const theme = client.theme;
  const style = client.style;
  const platform = client.device;
  const ready = client.readyLog

  

if ( ready ) { 
  require('./handlers/onReady.js').onReady(this.client)
  }
}

  
// VARIABLES //
loadVariables(path) {
loadVariables(this.client, this.basePath, path)
  }


// STATUS //
loadStatus(path) {
loadStatus(this.client, this.basePath, path)
}



  
// COMMANDS //
loadCommands(path) {
loadCommands(this.client, this.basePath, path)
}

// MUSIC COMMANDS //
  
loadMusic(path) {
loadMusic(this.voice, this.basePath, path)
}
  
// EVENTS //
loadEvents(path) {
loadEvents(this.client, this.basePath, path)
}


// FUNCTIONS //
loadFunctions(path) {
loadFunctions(this.client, this.basePath, path)
}


}
module.exports = { 
  Handler,
};
