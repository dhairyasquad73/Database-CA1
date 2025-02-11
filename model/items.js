const mongoose = require('mongoose');
const app = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    name: "Pizza",
    price: $23,
});

module.exports = mongoose.model('items', itemSchema); 
