const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartItemsController');


module.exports = function () {
   
    router.post('/createCart', cartController.CreateCart);
    router.get('/getallgiftitems', cartController.getallgiftitems);
  
    router.get('/getallflower', cartController.getallflowercategory);
    router.get('/getCartno/:username', cartController.getcartno);
    router.get('/getcartItems/:username', cartController.getcartItemByuserId);
    router.get('/getItems/:id', cartController.getItemById);
    router.delete('/deletecart/:id', cartController.ondelete);
    router.put('/updatecart/:id', cartController.updatecartitems);
    
    return router;
}