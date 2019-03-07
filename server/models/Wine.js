const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wineSchema = new Schema({

title: {type: String, unique: true},
price: {type: Number},
pubDate: {type: Date},
isoDate: {type: Date},
link: {type: String},
guid: {type: String},
author: {type: String},
description: {type: String},
content: {type: String},
categories: {type: String}
},{
    timestamps: true
})

const Wine = mongoose.model('Wine', wineSchema);
module.exports = Wine;