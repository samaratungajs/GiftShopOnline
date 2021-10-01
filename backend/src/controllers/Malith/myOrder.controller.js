const myOrder = require('../../models/Nivethika/payment');

const getAllMyOrders = async(req,res)=>{
  const status = req.query.cat;
  const dLow = req.query.dLower;
  const dUp = req.query.dUpper
  console.log(dLow + " " + dUp); 
     let orders; 
    
         if(status){
       orders = await myOrder.find({status}).populate('orderitems','productName supplier category wholesalePrice imageURL');

         }
     else if(dLow && dUp){
        orders = await myOrder.find({ createdAt : { $gte: new Date(dLow), $lte: new Date(dUp)}, status :{$eq:"completed"}}).populate('orderitems','productName supplier category wholesalePrice imageURL');
        console.log(orders)
      }

     else{
       orders = await myOrder.find({status:{$eq:"completed"}}).populate('orderitems','productName supplier category wholesalePrice imageURL');
     }
   res.status(200).json(orders);
   }

  
   const deleteOrders = async (req, res) => {
     try {
         const order = await myOrder.findById(req.params.id);
  
         try {
            await order.delete()
            res.status(200).json("order has been deleted");
         } catch (err) {
             res.status(500).json(err);
         }
 
         
     } catch (err) {
         
     }
 }


  const PutBin = async (req, res) => {
        try {
            const updateBin = await myOrder.findByIdAndUpdate(req.params.id,
               {$set:{status:'deleted'}})
            res.status(200).json(updateBin);
            console.log(updateBin)
        } catch (err) {
            res.status(200).json(err);
        }   
    

  };



module.exports = {
    getAllMyOrders,
    deleteOrders,
    PutBin
}