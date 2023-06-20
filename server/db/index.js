const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/chatter');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

const sessionSchema = new mongoose.Schema({
  id: {
    type: String
  },
  hash: String,
  user_id: {
    type: mongoose.ObjectId,
    ref: 'User'
  }
});

const User = new mongoose.model('User', userSchema);
const Session = new mongoose.model('Session', sessionSchema);

module.exports = {
  User,
  Session
};