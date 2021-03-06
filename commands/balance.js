const { currency } = require('../index.js');

module.exports = {
    name: 'balance',
    description: 'server info display',
    execute(message, commandArgs) {
       
        const target = message.mentions.users.first() || message.author;
        return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`).then((reply) => reply.delete({timeout: 10000}));
    },
};