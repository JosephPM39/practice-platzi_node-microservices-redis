const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', function (req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
});

router.get('/:id', function (req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
});

//I used get instead of "delete", because i need test this basic concept in the browser url
router.get('/remove/:id', function (req, res) {
    Controller.remove(req.params.id)
        .then((rta) => {
            response.success(req, res, rta, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

});

//I used get instead of "post", because i need test this basic concept in the browser url
router.get('/upsert/:name', function (req, res) {
    Controller.upsert(req.params.name)
       .then((rta) => {
            response.success(req, res, rta, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

})

module.exports = router;
