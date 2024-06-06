const express = require('express');
const messageController = require('../controllers/messagesController');

const router = express.Router();

// Define your routes here
router.get('/:chatId', messageController.getMessages);
router.post('/', messageController.createMessage);

module.exports = router;