const Discord = require("discord.js");
const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});
const btcValue = require('btc-value');
const DBL = require('dblapi.js');
//const disbut = require("discord-buttons");
//disbut(client);
//const { MessageButton } = require('discord-buttons')
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.cfg = require("./botConfig");
client.cmds = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "common.case": {
    cost: 10000,
  },
  "rare.case": {
    cost: 100000,
  },
  "epic.case": {
    cost: 1000000,
  },
  "<:ant:948264757000040460>" : {
    cost: 3
  },
  "<:bear:948264822926094426>" : {
    cost: 3
  },
  "<:bird:948264810980732988>" : {
    cost: 3
  },
  "<:bison:948264912818429962>" : {
    cost: 3
  },
  "<:cat1:948265025850724372>" : {
    cost: 3
  },
  "<:deer:948264928387674213>" : {
    cost: 3
  },
  "<:dodo:948264775639519232>" : {
    cost: 3
  },
  "<:fox:948265002492624976>" : {
    cost: 3
  },
  "<:goat:948264872850886687>" : {
    cost: 3
  },
  "<:god:948265037313757184>" : {
    cost: 3
  },
  "<:gorilla:948265050538377226>" : {
    cost: 3
  },
  "<:horse:948264952198746112>" : {
    cost: 3
  },
  "<:koala:948264836322721862>" : {
    cost: 3
  },
  "<:leopard:948264964597121146>" : {
    cost: 3
  },
  "<:llama:948264865552818196>" : {
    cost: 3
  },
  "<:monkey:948265059686174871>" : {
    cost: 3
  },
  "<:mouse:948264854551162910>" : {
    cost: 3
  },
  "<:ox:948264893629480981>" : {
    cost: 3
  },
  "<:penguin:948264801698717728>" : {
    cost: 3
  },
  "<:pig:948264880417439804>" : {
    cost: 3
  },
  "<:rabbit:948264845520801882>" : {
    cost: 3
  },
  "<:tiger:948264974856388639>" : {
    cost: 3
  },
  "<:trex1:948264765866786907>" : {
    cost: 3
  },
};
const fs = require("fs");
const config = process.env;
client.config = config;
const synchronizeSlashCommands = require('discord-sync-commands');
client.commands = new Discord.Collection();
fs.readdir("./commands-interactions/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands-interactions/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, {
            name: commandName,
            ...props
        });
        console.log(`👌 Komut Yüklendi: ${commandName}`);
    });
    synchronizeSlashCommands(client, client.commands.map((c) => ({
        name: c.name,
        description: c.description,
        options: c.options,
        type: 'CHAT_INPUT'
    })), {
        debug: true
    });
});

const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 3000, webhookAuth: process.env.TOPGG_AUTH });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log("r")
  const channel = client.channels.cache.get(process.env.VOTE_POST_CHANNEL)
  const embed = new Discord.MessageEmbed()
  .setTitle(`Thanks for voting!`)
  .setDescription(`──────────────────────────
  **:tada: Thanks for voting!
  :sparkles: Voted By:<@${vote.user}>
  :diamond_shape_with_a_dot_inside: Wait 12 Hours to vote again!
  🔗You can vote by clicking the button below!**
  ──────────────────────────`)
  //.setImage(process.env.IMAGE_LINK)
  .setFooter("Thanks for voting!")
  .setColor("GREEN")
        const buton2 = new MessageButton().setLabel('Vote').setStyle('LINK').setURL('https://top.gg/bot/924311092468015116/vote');
        const buton3 = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton2).addComponents(buton3)
  channel.send({components:[row], embed: [embed] })
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((f) => {
    if (!f.endsWith(".js")) return;
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

/*client.commands = new Discord.Collection();
 client.on('ready', () => {
	const ping = {
		name: 'ping',
		description: 'pong!'
	};
	client.commands.create(ping); //グローバルコマンド
});

client.on('commandInteraction', data => {
	if (data.commandName === 'ping') {
		data.reply.send('pong!');
	};
});*/
client.login(process.env.TOKEN);
