const mongoose = require('mongoose');
const Authors = new mongoose.Schema({
    name: { type: String,
    minlength: [3,"name must be at least 3 char."]

    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', Authors);