const express = require('express');
const router = express.Router();
const controller = require('../controllers/productManagerController');

module.exports = function() {
    router.post('/create', controller.addGiftItems);
<<<<<<< HEAD
   
=======
    router.get('/getallitems', controller.getAllGiftItems);
>>>>>>> 463cbcd78789a39c5a8c9811e9bfb8747daa5108
  

    return router;
}