const { ChatBot } = require('./ChatBot.js');

function chatBot() {
	chatBot = new ChatBot();
	chatBot.initialize();
}

chatBot();
