const TelegramBot = require("node-telegram-bot-api");
const token = "YOUR_BOT_TOKEN";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    
    const faq = {
        "How to claim gift code?": "Join our Telegram channel and enter the code in the gift code section.",
        "How to check wallet balance?": "Your wallet balance is shown in the Wallet section.",
        "How to contact support?": "Join our Telegram channel for support.",
        "Hello": "Hi there! How can I help you?",
        "Hi": "Hello! What do you need help with?",
        "Help": "You can ask about gift codes, wallet balance, or support details."
    };

    bot.sendMessage(chatId, faq[msg.text] || "Sorry, I don't understand. Try asking something else.");
});

module.exports = bot;
