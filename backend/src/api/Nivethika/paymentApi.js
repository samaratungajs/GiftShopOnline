const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/Nivethika/paymentController');


module.exports = function () {
   
    router.post('/payment', paymentController.Createpayment);

    

    
    return router;
}