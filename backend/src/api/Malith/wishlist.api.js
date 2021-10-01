const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Malith/wishlist.controller');

module.exports = function() {
    router.post('/addwishlistitem', controller.addWishlistItems);
    router.get('/getwishlistitem/:id', controller.getAllWishlistItems);
    router.delete('/deletewishlistitem/:id', controller.deletWishlistItem);
    router.put('/addnote/:id', controller.updateNote);
  

    return router;
}