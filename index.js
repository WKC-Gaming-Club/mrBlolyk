const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';
const TOKEN = process.env.TOKEN;


client.once('ready',() => {
    console.log('mrBlolyk is online!');
});

client.on('message', message =>{
    console.log(message);

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    
    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'lol'){
        message.channel.send("Lol");
    } else if  (command == 'robin'){
        message.channel.send("you saw nothing nerd");
    }


});






client.login(TOKEN);