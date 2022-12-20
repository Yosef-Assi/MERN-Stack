const mongoose = require('mongoose');
const ProductManager = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    description: {type:String}
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductManager);