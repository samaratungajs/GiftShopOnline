
const Payment = require('../../models/payment');

//add payment
const Createpayment = async (req, res) => {
    if (req.body) {
        const pay = new Payment(req.body);
        await pay.save()
          .then(data => {
              res.status(200).send({status:'Payment successfull'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}



module.exports = {
    Createpayment
   
};