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
    router.delete('/deletearchive/:id', controller.deleteArchiveItem);
    router.get('/supitems', controller.giftItemsfromsup);
    router.get('/itemsuppliers', controller.itemSupplierDetails);
    router.get('/allsuppliers', controller.getAllSuppliers);
    router.get('/searchsupp/:id', controller.searchSuppliers);
    router.get('/getoneitem/:id', controller.getitemsById);

    return router;
}