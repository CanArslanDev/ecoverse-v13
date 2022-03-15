const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(`${message.author.id}11`) 
  let amount = args[0]
  if(amount=="all") amount=authordata.amount
  if(amount=="half") amount=authordata.amount/2
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to sell**`)
  if(authordata.amount < amount) return message.reply(`**Looks like you don\'t have that much EcoCoin,Maximum amount you can sell: ${authordata.amount} EcoCoin.**`) 
  client.eco.removeMoney(`${message.author.id}11`, parseInt(amount));
  client.eco.addMoney(message.author.id, parseInt(amount*value));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let amountformat2=String(amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`**${amountformat} EcoCoin has been sold successfully! The money you earn is ${amountformat2}.**`)
});
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
  name: "selleco",
  aliases: ['BUYECO', 'buyecocoin'],
  usage: `selleco <amount>`
};
