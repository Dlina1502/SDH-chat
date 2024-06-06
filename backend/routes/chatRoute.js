const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

// Define your routes here
router.post('/', chatController.createChat);
router.get('/:id', chatController.getUserChats);
router.get('/find/:firstId/:secondId', chatController.findChat);


module.exports = router;