const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// POST 
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)

// GET 
router.get('/', userController.getUsers)

module.exports = router;