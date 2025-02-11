import express from 'express';
import mongoose from 'mongoose';
import product from './Schema/product';
import items from './Schema/items';

const mongoose = require('mongoose');
const PORT = 3010;

const app = require('express')();
const product = require('./Schema/product');
const items = require('./Schema/items');

app.get('/home', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
});
