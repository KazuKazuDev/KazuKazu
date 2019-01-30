const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("GMOD HACK BY KAZUDEV");
    console.log("le bot a bien était connecter");
});

bot.on('message', function (message){
    if (message.content === '!Mathis') {
        message.channel.send('Mathis ce tape une queu')
    }
})

bot.on('message', function (message){
    if (message.content === '!site') {
        message.channel.send('member.displayame Voila le site: https://kazudev-23.webself.net/')
    }
})

bot.on('guildMemberadd', function (member) {
    member.CreateDM().then(function (channel) {
        return channel.send('Bienvenue Sur KazuKazu' + member.displayName)
    }).catch(console.error)
})

bot.login("NTM5OTAyMzEyMjgyMzI1MDEz.DzJ70w.3j7nR_ae5cb63_SMcCn-08P4qVk");