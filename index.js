import express from 'express';
import mongoose from 'mongoose';
import product from './model/product';
import items from './model/items';

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(mongoose.json());

const mongoose = require('mongoose');
const PORT = 3010;

const product = require('./model/product');
const items = require('./model/items');

mongoose.connect('mongodb://localhost:27017/CA1', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
});

