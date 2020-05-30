var Reserva = require('../models/reservas');

const Reservas = module.exports



Reservas.listar = () => {

    return Reserva
        .find()
        .exec()
}

Reservas.listarPorLocal = p => {
    return Reserva
        .find({place : p})
        .exec()
}

Reservas.consultar = id => {


    return Reserva
        .findOne({_id : id})
        .exec()
}

Reservas.reservar = r => {

    return Reserva
        .updateOne({endDate: {$gt: r.startDate},startDate: {$lt: r.endDate},place: r.place},{$setOnInsert: r},{upsert: true});
}

Reservas.cancelar = id => {
    return Reserva
        .deleteOne({_id: id})
        .exec()
}

Reservas.atualizar = (date) => {

    return Reserva
        .deleteMany({endDate: {$lt: date}})
        .exec()
}



// Controladores extra

Reservas.contar = () => {
    return Reserva
        .countDocuments()
        .exec()
}

Reservas.inserir = res => {
    var novo = new Reserva(res)
    return novo.save()
}