const mongoose = require('mongoose');
const app = require('express');

const productSchema = new mongoose.Schema({
    name: String ,required: true,
    price: Number ,required : true,
    items: Array ,required: true,
});

module.exports = mongoose.model('product', productSchema); // Exporting the model