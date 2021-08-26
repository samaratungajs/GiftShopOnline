const express = require('express');
const router = express.Router();
const controller = require('../controllers/productManagerController');

module.exports = function() {
    router.post('/create', controller.addGiftItems);
  

    return router;
}