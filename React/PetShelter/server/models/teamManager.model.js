const mongoose = require('mongoose');
const Pet = new mongoose.Schema({
    name: { type: String,
    minlength: [2,"name must be at least 2 char."]

    },
    type: { type: String,
        minlength: [2,"type must be at least 2 char."]},
    description: { type: String,
            minlength: [2,"description must be at least 2 char."]},
    state: {skill1:"",skill2:"",skill3:""},
    like: {type:0},
        
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pets', Pet);