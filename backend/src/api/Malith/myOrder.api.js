const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Malith/myOrder.controller');

module.exports = function() {
    router.get('/getallorders', controller.getAllMyOrders);
    router.delete('/deleteorder/:id', controller.deleteOrders);
    router.put('/putbin/:id', controller.PutBin);

  

    return router;
}