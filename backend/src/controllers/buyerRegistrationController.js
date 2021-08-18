const Buyer = require('../models/buyer');

const createNewBuyer = async (req, res) => {
    if (req.body) {
        const buyer = new Buyer(req.body);
        buyer.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllBuyers = async (req, res) => {
    await Buyer.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getBuyerById = async (req, res) => {
    if (req.params && req.params.id) {
      await Buyer.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }


module.exports = {
    createNewBuyer,
    getAllBuyers,
    getBuyerById,
};