const Supplier = require('../models/supplier');

const createNewSupllier = async (req, res) => {
    if (req.body) {
        const supplier = new Supplier(req.body);
        supplier.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllSuppliers = async (req, res) => {
    await Supplier.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSupplierById = async (req, res) => {
    if (req.params && req.params.id) {
      await Supplier.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }



module.exports = {
    createNewSupllier,
    getAllSuppliers,
    getSupplierById,
};