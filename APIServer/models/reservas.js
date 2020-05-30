const mongoose = require('mongoose');


var reservasSchema = new mongoose.Schema({

    place: String,
    startDate: String,
    endDate: String,
    nif: String

},
{
    versionKey: false
});

module.exports = mongoose.model('reservas', reservasSchema);