exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 2);
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount5 = args[1]
    let coinflip= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
        let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 5000});
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
  let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
        if (amount3=="tails" || amount3=="heads")
 {  if(amount5=="all") amount5=authordata.amount;
    if(amount5=="half") amount5=authordata.amount/2 , amount5=parseInt(amount5);
    else if (!amount5 || isNaN(amount5)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
    if(amount5>authordata.amount || amount5<1)  return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    else
    {
    if(amount5=="all") amount5=authordata.amount;
      if(amount5=="half") amount5=authordata.amount/2 , amount5=parseInt(amount5);
    else if (!amount5 || isNaN(amount5)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
                message.channel.send(`**${message.author.tag} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(message.author.id, parseInt(amount5));
      msg.edit(`**${message.author.tag} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙 and you won **${amount5*2}**💶`);
        }
    else {
      let data2= client.eco.removeMoney(message.author.id, parseInt(amount5));
     msg.edit(`**${message.author.tag} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙 and you lost it all... :c`);
    }
        }, 3000);
        })
     
    }}
  else{
  //--------------------------------------------
    if(amount3=="all") amount3=authordata.amount;
    if(amount3=="half") amount3=authordata.amount/2 , amount3=parseInt(amount3);
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    else
    {
       if([Math.floor(amount4)]==0) coinflip="Heads";
          else coinflip="Tails";
                message.channel.send(`**${message.author.tag} | ** spent **${amount3}**💶 and chose **${coinflip}**\n The coin spins.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** spent **${amount3}**💶 and chose **${coinflip}**\n The coin spins..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** spent **${amount3}**💶 and chose **${coinflip}**\n The coin spins...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(message.author.id, parseInt(amount3));
      msg.edit(`**${message.author.tag} | ** spent **${amount3}**💶 and chose **${coinflip}**\n The coin spins.🪙 and you won **${amount3*2}**💶`);
        }
    else {
      let data2= client.eco.removeMoney(message.author.id, parseInt(amount3));
     msg.edit(`**${message.author.tag} | ** spent **${amount3}**💶 and chose **${coinflip}**\n The coin spins.🪙 and you lost it all... :c`);
    }
        }, 3000);
        })
     
    }}
    
    }};
const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('Gweep Creative Çekiliş Botu Yardım Menüsü')
        .setDescription(`Botta (Slash) komutlar mevcuttur. Bu komutlar üzrinden işlemleirini yapabilirsiniz.`)
        .addField('`/başlat`','Çekiliş Başlatır',false)
        .addField('`/bitir`','Var olan çekilişi bitirir',false)
        .addField('`/drop`','drop çekiliş başlatır',false)
        .addField('`/yenile`','Sonlanmış çekilişin kazananını yeniden belirler',false)
        .addField('`/durdur`','Devam eden çekilişi durdurur',false)
        .addField('`/devam`','Durmuş çekilişi başlatır',false)
        .setFooter(`Developed by Gweep Creative 💖`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('Gweep Creative Youtube').setStyle('LINK').setURL('http://gweepcreative.com');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
exports.help = {
    name: "cf",
    aliases: ["coinflip","CF"],
    usage: "cf <yazı,tura> <miktar>"
}
