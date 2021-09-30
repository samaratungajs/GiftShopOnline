const mongoose = require('mongoose');

const deliver_pickupSchema = new mongoose.Schema({
    username:{type: "string", required: true},
    pickup_location: {type: "string", required: true},
    preferred_time: {type: "string", required: true },
    pickup_date:{type: Date, required: true},
    personal_message: { type: "string", required: true},
   firstname: {type: "string", required: true},
    lastname: { type: "string", required: true },
    email: { type: "string", required: true },
     phone: { type: "string", required: true },
   
});




const deliver_pickup = mongoose.model('delivery_pickup', deliver_pickupSchema);

module.exports =
deliver_pickup;