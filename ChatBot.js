const { Client } = require('whatsapp-web.js');
const { Simon } = require('./Simon.js');
const qrcode = require('qrcode-terminal');

class ChatBot {
	constructor() {
		this.client = new Client();
		this.simon = new Simon(this);
	}

	sendResponseMessage(receptor, message) {
		this.client.sendMessage(receptor, message);
	}

	listenMessage(message) {
		this.simon.responseMessage(message);
	}

	initialize() {
		this.client.on('qr', qr => {
			qrcode.generate(qr, {small: true});
		});

		this.client.on('ready', () => {
			console.log("Client is ready!");
		});

		this.client.on('message', message => {
			this.listenMessage(message);
		})

		this.client.initialize();
	}
}

module.exports = { ChatBot }
