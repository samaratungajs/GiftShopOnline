const express = require('express');
const router = express.Router();
const controller = require('../controllers/buyerRegistrationController');

module.exports = function () {
  router.post('/create', controller.createNewBuyer);
  router.get('/:email', controller.getBuyerByEmail);
  

  return router;
} 