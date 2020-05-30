var express = require('express');
var router = express.Router();
var Reserva = require('../controllers/reservas')


/* GET home page. */
router.get('/reservas', function(req, res, next) {

  var currentTime = new Date().toLocaleString();

  Reserva.atualizar(currentTime)
    .then(Reserva.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro)))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/reservas/places/:place', function(req, res, next) {

  var currentTime = new Date().toLocaleString();

  Reserva.atualizar(currentTime)
    .then(Reserva.listarPorLocal(req.params.place)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro)))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/reservas/:id', function(req, res, next) {

  var currentTime = new Date().toLocaleString();


  Reserva.atualizar(currentTime)
    .then(Reserva.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro)))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/reservas/:nif/reservar', function(req, res, next) {

 var currentTime =  new Date().toLocaleString();

 req.body.nif = req.params.nif

Reserva.atualizar(currentTime)
Reserva.reservar(req.body)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))

});



router.delete('/reservas/:idReserva/cancelar', function(req, res, next) {
  Reserva.cancelar(req.params.idReserva)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});
module.exports = router;
