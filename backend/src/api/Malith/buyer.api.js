const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Malith/buyer.controller');

module.exports = function() {
    router.get('/getallitems', controller.getAllGiftItems);
  

    return router;
}