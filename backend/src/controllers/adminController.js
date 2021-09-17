const giftItem = require('../models/giftItem');
const Supplier = require('../models/supplier');
let User = require("../models/user");
let Buyer = require("../models/buyer");

//product management

const getAllGiftItems = async(req, res) => {
    await giftItem.find({}).populate('giftitems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const getGiftitemsById = async(req, res) => {
    if(req.params && req.params.id){
        await giftItem.findById(req.params.id).populate('giftitems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

}

//Get gift items to be approved
const giftItemsToApprove = async(req, res) => {
    let cid = req.params.id;
    await giftItem.find({"status":{$eq:cid}})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const ApproveGiftItems= async(req, res) => {
    if (req.params && req.params.id) {
        let cid = req.params.id;
        await giftItem.findByIdAndUpdate(cid,{$set:{status:'approved'}})
        .then(() => {
            res.status(200).send({ status: "GiftItem approved" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with approval", error: err.message });
        })
    }
}


const getTotalUser = async(req, res) => {
    await User.find({}).countDocuments()
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getTotalBuyer = async(req, res) => {
    await Buyer.find({}).countDocuments()
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getTotalSupplier = async(req, res) => {
    await Supplier.find({}).countDocuments()
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getTotalUnapprovedItems = async(req, res) => {
    await giftItem.find({status:'unapproved'}).countDocuments()
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getUserByEmail= async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
      await User.findOne({email:Email}).populate('User', 'email password type')
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
}  

module.exports = {
    
    getAllGiftItems,
    getGiftitemsById,
    giftItemsToApprove,
    ApproveGiftItems,
    getTotalUser,
    getTotalBuyer,
    getTotalSupplier,
    getTotalUnapprovedItems,
    getUserByEmail
};