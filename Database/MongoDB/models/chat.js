const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    from: {
        type: String,
        requied: true
    },
    to: {
        type: String,
        requied: true
    },
    message: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
        requied: true
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;