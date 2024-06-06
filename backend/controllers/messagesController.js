const Message = require('../models/messages');

// Define your messagesController object
const messagesController = {
    createMessage: async(req, res) =>{
        const { chatId, senderId, content } = req.body;

        const message = new Message({
            chatId,
            senderId,
            content
        });

        try {
            await message.save();
            res.status(200).json({ message: 'Message sent successfully', data: message });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'An error occurred while sending the message' });
        }
    },

    getMessages: async (req, res) => {
        const chatId = req.params.chatId;
        try {
            const messages = await Message.find({ chatId });
            res.status(200).json(messages);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'An error occurred while fetching messages' });
        }
    },

};

module.exports = messagesController;