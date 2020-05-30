const mongoose = require('mongoose');


var usersSchema = new mongoose.Schema({
    nif: String,
    name: String,
    password: String
},{
    versionKey: false
});

module.exports = mongoose.model('users', usersSchema);