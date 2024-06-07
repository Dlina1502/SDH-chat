const User = require('../models/user');

const userController = {
    registerUser: async (req, res) => {
        try {
            const { name, nick } = req.body;

            const existingUser = await User.findOne({ nick });
            if (existingUser) {
                return res.status(400).json({ error: 'This nick already exists' });
            }

            const newUser = new User({
                name,
                nick
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully', data: newUser});
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during user registration' });
        }
    },
    
    loginUser: async (req, res) => {
        try {
            const { nick } = req.body;

            const existingUser = await User.findOne({ nick });
            if (!existingUser) {
                return res.status(400).json({ error: 'User not found' });
            }

            res.status(200).json({ message: 'User logged in successfully', data: existingUser});
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during user login' });
        }
    },
    
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching users' });
        }
    },

    findUser: async (req, res) => {
        const userId = req.params.id;
        try{
            const user = await User.findById(userId);
            res.status(200).json(user);
        }catch(error){
            res.status(500).json({ error: 'An error occurred while fetching user' });
        }
    }
};

module.exports = userController;

