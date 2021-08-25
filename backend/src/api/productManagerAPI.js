const express = require('express');
const router = express.Router();
const controller = require('../controllers/productManagerController');

module.exports = function() {
    router.post('/create', controller.addGiftItems);
    router.delete('/delete/:id', controller.deleteGiftItems);
    router.get('/getitem/:id', controller.getGiftitemsById);
    router.get('/getall', controller.getAllGiftItems);
    router.get('/supplieritems', controller.getSupplierGiftItems);
    router.get('/notapproved', controller.giftItemsToApprove);


    return router;
}