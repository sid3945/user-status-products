const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    available: {type: Boolean, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;