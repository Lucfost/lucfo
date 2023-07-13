const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const RoleAssignment = require('./roleAssignment.js');
global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
        
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

      


client.login(client.config.app.token);