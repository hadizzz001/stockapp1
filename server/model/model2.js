const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    itemName: {
        type: String,
        require: true
    }, 
    imgurl: String, 
    instock: {
        type: Number,
        require:true
    },
    price: Number
     
})

const Itemdb = mongoose.model('itemdb',schema);
module.exports = Itemdb;

 
