const mongoose = require("mongoose")
const schema = mongoose.Schema;
const Schema = require('mongoose').Schema
const ecomSchema = new mongoose.Schema({
    photourl: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,

        trim: true
    },
    skuid: {
        type: String,
      

        trim: true
    },
    description: {
        type: String,
        required: true,
        default: "",
        trim: true

    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        default: 1
    },

    wishlist: [{
        type: String,
        required: true
    }],


    filename: {
        type: String,
        trim: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


const post = mongoose.model("Post", ecomSchema);

module.exports = post;
