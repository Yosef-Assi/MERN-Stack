const mongoose = require('mongoose');
const Teams = new mongoose.Schema({
    name: { type: String,
    minlength: [2,"name must be at least 2 char."]

    },
    position: { type: String
        },
    status: 
        { game1: Number, game2: Number ,game3:Number}
   
        
}, { timestamps: true });
module.exports.Team = mongoose.model('Teams', Teams);