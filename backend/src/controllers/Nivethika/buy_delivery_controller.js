const buydelivery = require('../../models/Nivethika/buydelivery');
const myselfdelivery = require('../../models/Nivethika/myself');
const pickupdelivery = require('../../models/Nivethika/pickup');
//add delivery details of obtion buy for myself
const SaveDelivery_gift = async (req, res) => {
    if (req.body) {
        const deliver_Gift = new buydelivery(req.body);
        await deliver_Gift.save()
          .then(data => {
              res.status(200).send({status:'Delivery details saved successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}

const myself = async (req, res) => {
    if (req.body) {
        const deliver_myself = new myselfdelivery(req.body);
        await deliver_myself.save()
          .then(data => {
              res.status(200).send({status:'Delivery details saved successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}

const pickup = async (req, res) => {
    if (req.body) {
        const pickup = new pickupdelivery(req.body);
        await pickup.save()
          .then(data => {
              res.status(200).send({status:'Delivery details saved successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}

module.exports = {
    SaveDelivery_gift,
    myself,
    pickup

}