const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 30
        },
        nick: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 10
        }
    }
    ,
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;