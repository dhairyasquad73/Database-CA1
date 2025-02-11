const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    name: "Pizza",
    price: $23,
});

module.exports = mongoose.model('items', itemSchema); // Exporting the model
