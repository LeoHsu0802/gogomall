const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    upload_date:{
        type: Date,
        default:Date.now()
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)