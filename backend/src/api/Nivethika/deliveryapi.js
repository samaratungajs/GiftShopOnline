const express = require('express');
const router = express.Router();
const deliver_gift_Controller = require('../../controllers/Nivethika/buy_delivery_controller');


module.exports = function () {
   
    router.post('/delivery_gift', deliver_gift_Controller.SaveDelivery_gift);
    router.post('/delivery_myself',deliver_gift_Controller.myself);
    router.post('/delivery_pickup',deliver_gift_Controller.pickup);
    

    
    return router;
}