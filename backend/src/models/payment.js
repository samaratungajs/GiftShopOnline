const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    username: { type: "string", required: true },
    orderitems:[{type:mongoose.Schema.Types.ObjectId,required:false,ref:'carts'}],
    amount:{ type: Number, required: true }
});




const payment = mongoose.model('payment',paymentSchema);

module.exports= payment;