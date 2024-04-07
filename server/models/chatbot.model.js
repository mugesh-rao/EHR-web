const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  response: {
    type: String,
  },
  user: {
    type: String, 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatMessage = mongoose.model('ChatBot', chatMessageSchema);

module.exports = ChatMessage;
