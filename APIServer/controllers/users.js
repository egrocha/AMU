var User = require('../models/users')

var Users = module.exports

Users.listar = () => {
    return User
        .find()
        .exec()
}

Users.consultar = nif => {
    return User
        .findOne({nif: nif})
        .exec()
}


Users.registar = user => {
    return User
        .updateOne({nif: user.nif},{$setOnInsert: user},{upsert: true});
}

Users.remover = nif => {
    return User
        .deleteOne({nif: nif})
        .exec()
}