const mongoose = require('mongoose');


var spacesSchema = new mongoose.Schema({
    name: String
},
{
    versionKey: false
});

module.exports = mongoose.model('spaces', spacesSchema);