const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Malith/buyer.controller');

module.exports = function() {
    router.post('/getallitems', controller.getAllGiftItems);
    router.get('/getspecialdeals', controller.getSpecialDeals);
    router.get('/getnewarrivals', controller.getNewArrivals);
  

    return router;
}