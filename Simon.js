const responses = require('./responseMessages.json');
const messages = require('./receivedMessages.json');

class Simon {
	constructor(chatBot) {
		this.chiara = '5492234973593@c.us'
		this.chatBot = chatBot;
	}

	findAnswer(message) {
		let key = messages.find(msg => msg.keywords.find(keyword => keyword === message.body)).key;
		let answer = responses.find(msg => msg.key === key).response;
		
		return answer;
	}

	// Cuanto queda para vernos, leeme un poema, escribime un poema.
	responseMessage(message) {
		let answer = this.findAnswer(message);

		if (answer !== undefined) {
			this.chatBot.sendResponseMessage(message.from, answer);
		}
	}
}

module.exports = { Simon }
