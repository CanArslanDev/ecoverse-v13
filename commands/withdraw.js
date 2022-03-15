exports.execute = async (client, message, args) => {
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  let userBalance = client.eco.fetchMoney(`${message.author.id}10`);
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to transfer**`) 
  if(amount>userBalance.amount) return message.reply('**Looks like you don\'t have that much money in the bank**') 
  client.eco.addMoney(message.author.id, parseInt(amount));
  client.eco.removeMoney(`${message.author.id}10`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully withdraw 💶**${amountformat}** to **🏦BANK**.`)
}
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
  name: "withdraw",
  aliases: ['WITHDRAW'],
  usage: `withdraw <amount>`
};
