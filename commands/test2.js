const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone' });
const { MessageEmbed } = require("discord.js");
const dbots = require("discord.dbl");
const dbl = new dbots("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNDMxMTA5MjQ2ODAxNTExNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQyOTYwNzk5fQ.BfR0ku4nkuShZ18qcQrGHhJPiKfmIKKLCeMkKKy4yZI", client, { autoPost: 900001 });

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle(`Test Successful!`)
    return message.channel.send(embed);
    /*
    FARKLI KOMUTLAR DİZİNİ


exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    return message.reply(`**${message.author.tag} | ** **${[Math.floor(beg2.amount)]}** Paranı **2'ye** **${amount}** katladın ve **${amount3}** 💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.`);
       let data2= client.eco.removeMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.removeMoney(client.ecoAddUser, parseInt(kullaniciveri));    
       let data2= client.eco.addMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.addMoney(client.ecoAddUser, parseInt(kullaniciveri));        
       let data2= client.eco.setMoney(message.author.id, parseInt(kullaniciveri));
        let data2= client.eco.setMoney(client.ecoAddUser, parseInt(kullaniciveri));           
---------------------------------------------------------------------------------------*/
  
  
  /*module.exports.execute = async (client, message, args) => {
      let jobs = [
        "Doktor",
        "Pompacı",
        "Diş hekimi",
        "Müzisyen",
        "Yayıncı",
        "Youtuber",
        "Yazılımcı",
        "Tesisatçı",
        "Döşemeci"
    ];
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(message.author.id, amount);
    if (work.onCooldown) return message.reply(`You are tired rn. Come back after **${work.time.minutes} minutes & ${work.time.seconds} seconds** to work again.`);
    else return message.reply(`You worked as **${jobs[Math.floor(Math.random() * jobs.length)]}** and earned **${work.amount}** 💶. Now you have **${work.after}** 💶.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
} */
  
}

exports.help = {
    name: "test2",
    aliases: [],
    usage: `test2`
}
