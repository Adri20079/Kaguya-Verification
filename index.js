const Discord = require('discord.js');
const { PREFIX, AUTHOR} = require('./config');

const client = new Discord.Client({ 
    disableEveryone: true 
});

client.on('ready', async () => {
    console.log('Kaguya => Discord.Connected');
    client.user.setActivity(`${PREFIX}verify | Developed By ${AUTHOR}`, { type: 'PLAYING' });
});


client.on('message', message => {
    if(message.author.bot) return;
        
    const content = message.content.split(' ');
    const command = content[0].toLowerCase();
    const args = content.slice(1);

    const member = message.member

    if (command === `${PREFIX}verify`) {
        if (member.guild.id == '736687689151283311') {
            try{
                const role = member.guild.roles.cache.find(role => role.name === 'Member');
                member.roles.add(role);
                member.send("✅Verified!")
            } catch(e) {
                console.error(e);
                member.send("❌Failed To Verify!")
            }
        }

        if (member.guild.id == '756131619634544750') {
            try{
                const role = member.guild.roles.cache.find(role => role.name === 'Member');
                member.roles.add(role);
                member.send("✅Verified!")
            } catch(e) {
                console.error(e);
                member.send("❌Failed To Verify!")
            }
        }
        
        if (member.guild.id == '761280387057582101') {
            try{
                const role = member.guild.roles.cache.find(role => role.name === 'Member');
                member.roles.add(role);
                member.send("✅Verified!")
            } catch(e) {
                console.error(e);
                member.send("❌Failed To Verify!")
            }
        }
    } else if (command == `${PREFIX}membercount`) {
        let em = new Discord.MessageEmbed()
        .setTitle("Member Count")
        .addField('Members Online',message.guild.memberCount)
        .addField('Total Members',message.guild.members)
        .addField('Bots',message.guild.bots);

        message.channel.send(em);
    }
});

client.login(process.env.TOKEN);

