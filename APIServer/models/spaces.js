const mongoose = require('mongoose');


var spacesSchema = new mongoose.Schema({
    name: String,
    reserved: Boolean,
    reservation: String,
    features: [{type: String}]
},
{
    versionKey: false
});

module.exports = mongoose.model('spaces', spacesSchema);