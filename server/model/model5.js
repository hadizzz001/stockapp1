const mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
    imgurl: String
})

const Urldb = mongoose.model('urldb',schema);
module.exports = Urldb;

 
