const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require("../../utils/afk")


module.exports = 
    name; 'about',
    category; "music",
    memberpermissions; ["SEND_MESSAGES"],
    description; 'About DJ SMOOTH PANDA',
    options;
    run: async (client, interaction, args) =>


    {if (interaction.user.id) 
        return interaction.editReply({ 
          content: "DJ SMOOTH PANDA is a 13 year old newly emerging DJ. He has done 1 album and quite a few singles. Do /singles to have the full list of songs. He has had 630 streams in total. On YouTube, his music has had 613 views." 
        });
      }