const Chat = require('../models/chat');

const chatController = {
    createChat : async (req, res) => {
        const { firstId, secondId } = req.body;

        try {

            const chat = await Chat.findOne({
                participants: { $all: [firstId, secondId] }
            });

            if (chat) return res.status(200).json(chat)

            const newChat = new Chat({
                participants: [firstId, secondId]
            });

            await newChat.save();
            res.status(200).json({ message: 'Chat created successfully', data: newChat });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the chat' });
        }
    },

    // Function to get chats for a specific user
    getUserChats : async (req, res) => {
        const userId = req.params.id;

        try {
            const chats = await Chat.find({ participants: { $in: [userId] } });
            res.status(200).json(chats);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching chats' });
        }
    },

    findChat : async (req, res) => {
        const { firstId, secondId } = req.params;

        try {
            const chat = await Chat.findOne({ participants: { $all: [firstId, secondId] } });
            res.status(200).json(chat);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching chats' });
        }
    },
}


module.exports = chatController;