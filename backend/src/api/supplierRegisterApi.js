const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplierRegisterController');

module.exports = function () {
  router.post('/create', controller.createNewSupllier);
  router.get('/:email', controller.getSupplierByEmail);

  return router;
} 