class Simon {
	constructor(chatBot) {
		this.chiara = '5492234973593@c.us'
		this.chatBot = chatBot;
	}

	responseMessage(message) {
		if (message.from === this.chiara) {
			this.responseChiaraMessageTable(message.body);
		}
		else if (message.from === 'yo') {
			this.responseGonzaloMessageTable(message.body)
		}
		else {
			this.responseMessageTable(message)
		}
	}

	responseMessageTable(message) {
		switch(message.body) {
			case 'Hola simon':
				this.chatBot.sendResponseMessage(message.from, "Hola");
				break;

			default:
				break;
		}	
	}

	responseChiaraMessageTable(message) {
		switch(message) {
			case 'Hola simon':
				this.chatBot.sendResponseMessage(this.chiara, this.hi());
				break;

			default:
				break;
		}	
	}

	// Messages
	hi() {
		return "Hola Chiarita. Que queres que te consiga?";
	}
}

/**
function responseMessageTable(message) {
	switch(message.body) {
		case 'Hola simon':
			sendResponseMessage(message.from, "Hola soy Simon! Este es un mensaje automatico. Gonzalo te contestara apenas se encuentre disponible");
	}
}

// Cuanto queda para vernos, leeme un poema, escribime un poema.
function responseMessageChiaraTable(message) {
	switch(message.body) {
		case 'Hola simon':
			sendResponseMessage(message.from, "Hola Chiarita. Que queres que te consiga?");
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
*/

module.exports = { Simon }
