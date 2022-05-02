const { Client } = require('whatsapp-web.js');
cons qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();t
