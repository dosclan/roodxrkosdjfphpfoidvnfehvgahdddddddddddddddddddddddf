const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
سرفرultra codes

ل جميع اكواد الدسكورد وا الويب وغيرها 

قد عملنا مسابقه صور 

وا الجاوائز 
300الف كريدت

ماذا تنتظر يمكن يحالفك الحظ وتفوز معنا 
                               [ https://discord.gg/epeGFA ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
