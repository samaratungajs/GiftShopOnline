const mongoose = require('mongoose');

const deliver_myselfSchema = new mongoose.Schema({
    Username:{type: "string", required: true},
    Recipient_firstname: {type: "string", required: true},
    Recipient_lastname: {type: "string", required: true },
    Recipient_addressline1:{type: "string", required: true},
    Recipient_city: { type: "string", required: true},
    Recipient_addressline2: { type: "string", required: true},
    Recipient_mobile_no: { type: "string", required: true },
    Nearest_Delivery: { type: "string", required: true, trim: true },
    Location_type: { type: "string", required: true },
    preferred_time: { type: "string", required: true},
    delivery_date: { type: Date, required: true },
    delivery_instructions: { type: "string", required: true },
     your_phone: { type: "string", required: true },
    your_email: { type: "string", required: true }
});




const deliver_myself = mongoose.model('delivery_myself', deliver_myselfSchema);

module.exports =
deliver_myself;