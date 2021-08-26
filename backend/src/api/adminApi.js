const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

module.exports = function () {
 
    router.get('/totaluser', controller.getTotalUser);
    router.get('/totalbuyer', controller.getTotalBuyer);
    router.get('/totalsupplier', controller.getTotalSupplier);
    router.get('/totalunapproveditems', controller.getTotalUnapprovedItems);
    router.get('/user/:email', controller.getUserByEmail);

  

  return router;
} 