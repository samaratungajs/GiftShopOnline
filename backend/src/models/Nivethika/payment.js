const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    username: { type: "string", required: true },
    orderitems:[{type:mongoose.Schema.Types.ObjectId,required:false,ref:'giftitem'}],
    amount: { type: Number, required: true },
    status: { type: "string", default: "until review" },
    Date:{type: "string"}
  
}, {
    timestamps: true
});




const payment = mongoose.model('paymentorder',paymentSchema);

module.exports= payment;