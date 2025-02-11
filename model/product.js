const mongoose = require('mongoose');
const app = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const productSchema = new mongoose.Schema({
    name: String ,required: true,
    price: Number ,required : true,
    items: Array ,required: true,

});

productSchema.methods.getProductName = function () {
    return this.name;
}

productSchema.methods.getProductPrice = function () {
    return this.price;
}

productSchema.methods.getProductItems = function () {
    return this.items;
}

module.exports = mongoose.model('product', productSchema); 