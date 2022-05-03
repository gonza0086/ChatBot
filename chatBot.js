const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Simon = require('./simon.json');
var client;


function responseMessageTable(message) {
	switch(message.body) {
		case 'Hola':
			sendResponseMessage(message.from, "Hola soy Simon! Este es un mensaje automatico. Gonzalo te contestara apenas se encuentre disponible");
	}
}

// Cuanto queda para vernos, leeme un poema, escribime un poema.
function responseMessageChiaraTable(message) {
	switch(message.body) {
		case '!simon':
			sendResponseMessage(message.from, Simon.SimonMessage);
			break;

		case 'Hola':
			sendResponseMessage(message.from, "Hola amor, no puede dormir chiqui??");
			break;

		case 'Te extraño':
			sendResponseMessage(message.from, "Yo te extraño mas amor, dentro de poco nos vemos!");
			break;

		case 'Te amo':
			sendResponseMessage(message.from, "Yo mas amor, no se presta a discucion...Mucho mucho te amor");
			break;

		case 'Por igual':
			sendResponseMessage(message.from, "Bueno por igual te la dejo pasar solo porque sos vos y sos lo mejor que me paso");
			break;

		default:
			break;
	}

}

function sendResponseMessage(receptor, message) {
	client.sendMessage(receptor, message);
}

function listenMessage() {
	client.on('message', message => {
		if (message.from == 'chiara') {
			responseMessageChiaraTable(message);
		}
		else {
			responseMessageTable(message);
		}
	});
}

function chatBot() {
	client = new Client();
	
	client.on('qr', qr => {
   		qrcode.generate(qr, {small: true});
	});

	client.on('ready', () => {
		console.log("Client is ready!");
		listenMessage();
	});
	
	client.initialize();
}

chatBot();
