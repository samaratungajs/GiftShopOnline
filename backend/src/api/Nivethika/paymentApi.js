const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/Nivethika/paymentController');


module.exports = function () {
   
    router.post('/payment', paymentController.Createpayment);
    router.get('/paymenttable', paymentController.tablepayment);
    router.get('/current', paymentController.currentdate);
    router.post('/two', paymentController.twodates);
    

    
    return router;
}