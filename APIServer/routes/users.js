var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')

/* GET home page. */
router.get('/users', function(req, res, next) {
  Users.listar()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/users/:nif', function(req, res, next) {
    Users.consultar(req.params.nif)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


router.post('/users/registar', function(req, res, next) {
        Users.registar(req.body)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/users/:nif/remover', function(req, res, next) {
    Users.remover(req.params.nif)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

  module.exports = router;