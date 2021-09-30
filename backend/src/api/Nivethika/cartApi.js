const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/Nivethika/cartItemsController');


module.exports = function () {
   
    router.post('/createCart', cartController.CreateCart);
    router.get('/getallgiftitems', cartController.getallgiftitems);
  
    router.get('/getallflower', cartController.getallflowercategory);
    router.get('/Rgetallflower', cartController.Rgetallflowercategory);
    router.get('/getallcakes', cartController.getallcakescategory);
    router.get('/Rgetallcakes', cartController.Rgetallcakescategory);
    router.get('/getallwatch', cartController.getallwatchcategory);
    router.get('/Rgetallwatch', cartController.Rgetallwatchcategory);
    router.get('/getallperfume', cartController.getallperfumecategory);
    router.get('/Rgetallperfume', cartController.Rgetallperfumecategory);
    router.get('/gettotal/:username', cartController.totalpay_peruser);
    router.get('/getCartno/:username', cartController.getcartno);
    router.get('/getcartItems/:username', cartController.getcartItemByuserId);
    router.delete('/deleteusername/:username', cartController.payDelete);
    router.get('/getItems/:id', cartController.getItemById);
    router.delete('/deletecart/:id', cartController.ondelete);
    router.put('/updatecart/:id', cartController.updatecartitems);
 
    
    return router;
}