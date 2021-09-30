
const Payment = require('../../models/Nivethika/payment');

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


const tablepayment=async(req,res)=>{
   
  await Payment.find({}).populate( 'orderitems','productName supplier category')
      .then((data) => {
          res.status(200).send({ data: data });
    })
   
    
}

//get current date
const currentdate=async(req,res)=>{
   
    await Payment.find({Date:new Date().toDateString() + ""}).populate( 'orderitems','productName supplier category')
        .then((data) => {
            res.status(200).send({ data: data });
      })
     
      
  }

  //get between two dates
  const twodates = async (req, res) => {
    if (req.body) {
        const first = req.body.first;
        const second = req.body.second;
        await Payment.find({ Date:{'$gte':first,'$lt':second}
    }).populate( 'orderitems','productName supplier category')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ status:"Error in retriving items" ,error: error.message });
            })
    
        
    }
}


module.exports = {
    Createpayment,
    tablepayment,
    currentdate,
   twodates
   
};