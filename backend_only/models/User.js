const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetCode: { type: String }, // Temporary reset code
    resetCodeExpires: { type: Date }, // Expiration time for the reset code
});

// Hash password before saving


const User = mongoose.model('user', userSchema);
module.exports = User;
  