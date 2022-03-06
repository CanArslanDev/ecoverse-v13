const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setAuthor(`Inventory of ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
  if (!x) {
    return message.channel.send(`No Items Found To Display :c`);
  }
  const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
console.log(arrayToObject)
  return message.channel.send(embed);
};
exports.help = {
  name: "inventory",
  aliases: ["inv","INV"],
  usage: `inv`
};
