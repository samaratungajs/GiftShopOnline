const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplierItemsController');

module.exports = function () {
  router.post('/create', controller.createNewSupllierItem);
  router.get('/:email', controller.getSupplierItemsByEmail);
  router.get('/item/:id', controller.getSupplierItemsById);
  router.put('/edit/:id', controller.EditSupplierItems);
  router.delete('/delete/:id', controller.deleteItems);

  return router;
} 