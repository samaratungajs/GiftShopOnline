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
    router.post('/archive', controller.addArchiveItems);
    router.get('/archiveitems', controller.getArchived);
    router.put('/update/:id', controller.updateGiftItem);
    router.put('/approveitem/:id', controller.ApproveGiftItems);
    router.put('/rejectitem/:id', controller.RejectGiftItems);


    return router;
}