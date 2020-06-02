const mongoose = require('mongoose');

var spacesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reserved: {
        type: Boolean,
        required: true
    },
    features: {
        type: [{type: String}],
        required: false
    },
    startDate: {
        type: String,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },
    nif: {
        type: Number,
        required: false
    },
    soundLimit: {
        type: Number,
        required: false
    },
    ocupationLimit: {
        type: Number,
        required: false
    }
},
{
    versionKey: false
});

module.exports = mongoose.model('spaces', spacesSchema);