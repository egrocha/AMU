var Space = require('../models/spaces');

const Spaces = module.exports



Spaces.listar = () => {

    return Space
        .find()
        .exec()
}

Spaces.consultar = id => {


    return Space
        .findOne({_id: id})
        .exec()
}

Spaces.contar = () => {
    return Space
        .countDocuments()
        .exec()
}

Spaces.inserir = s => {

    return Space
        .updateOne({name: s.name},{$setOnInsert: s},{upsert: true});
}

Spaces.remover = id => {
    return Space
        .deleteOne({_id : id})
        .exec()
}

Spaces.editar = (id, s) => {
    return Space
        .updateOne({_id: id}, {$set: s})
        .exec()
}