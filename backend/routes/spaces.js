var express = require('express');
var router = express.Router();
var Space = require('../controllers/spaces')


/* GET home page. */
router.get('/spaces', function(req, res, next) {

    Space.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

});

router.get('/spaces/:id', function(req, res, next) {

    Space.consultar(req.params.id)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    
});

router.post('/spaces/inserir', function(req, res, next) {

    Space.inserir(req.body)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    
});

router.delete('/spaces/:id/remover', function(req, res, next) {

    Space.remover(req.params.id)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    
});

router.post('/spaces/:id/editar', function(req, res, next) {

    Space.editar(req.params.id, req.body)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    
});
module.exports = router;