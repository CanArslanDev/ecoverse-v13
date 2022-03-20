const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Look Leaderboard!',
    run: async (client, interaction) => {
       let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return interaction.reply("❌ | Empty Leaderboard!");
    //const embed = new MessageEmbed()
      //  .setAuthor(`${message.guild.name} ! Sunucusunun Liderler Sıralaması`, message.guild.iconURL)
    //.setAuthor(`EcoVerse Top 15 Leaderboard`, message.guild.iconURL)
        //.setColor("RANDOM")
        //.setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/avatars/603948445362946084/a_f61398e073d78ae104e32b0517c891c3.gif")
        //.setTimestamp();
  let leader="\`\`\`md\n| EcoVerse Top 15 Leaderboard |\n\nNote:Amounts of money here can be bank accounts or EcoCoins\n-------------------------------------------------------------\n"
    leaderboard.forEach(u => {
      let moneyformat=String(u.money).replace(/(.)(?=(\d{3})+$)/g,'$1,')
       // embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}`, `**${moneyformat}** 💶`);
      leader+=`<Position:${u.position} | ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}>\n<Money: ${moneyformat}💶>\n---------------------\n`
    });
  leader+="\n\`\`\`"
  return interaction.reply(`${leader}`)
    }
};
