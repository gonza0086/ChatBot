const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

function responseTable(message) {
	switch(message.body) {
		case '!hola':
			sendResponseMessage(message.from, "Hola! como estas?");
			break;

		case 'Chau':
			sendResponseMessage(message.from, "Nos vemos!");

		default:
			break;
	}

	// sendResponseMessage(message.from, responseMessage);
}

function sendResponseMessage(sender, message) {
	console.log(sender + message);
	client.sendMessage(sender, message);
}

function listenMessage() {
	client.on('message', message => {
		responseTable(message);
	});
}

function chatBot() {
	client.on('qr', qr => {
   		qrcode.generate(qr, {small: true});
	});

	client.on('ready', () => {
		console.log("Client is ready!");
		listenMessage();
	});
	
	client.initialize();
}

function main() {
	chatBot();
}

main();
