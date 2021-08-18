
const Cartitems = require('../models/CartItems');
const GetItems = require('../models/giftItem');
//add items to cart
const CreateCart = async (req, res) => {
    if (req.body) {
        const cart = new Cartitems(req.body);
        await cart.save()
          .then(data => {
              res.status(200).send({status:'Item is added to cart successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}

//Retrive one product item by item id
const getItemById = async (req, res) => {
    if (req.params && req.params.id) {
        const itemId = req.params.id;
        await GetItems.findById(itemId )
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ status:"Error in retriving items" ,error: error.message });
            })
    
        
    }
}

//Retrive all cart items by user name
const getcartItemByuserId = async (req, res) => {
    if (req.params && req.params.username) {
        const username = req.params.username;
        await Cartitems.find({ username :username})
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ status:"Error in retriving items" ,error: error.message });
            })
    
        
    }
}

//Delete cart items
const ondelete = async (req, res) => {
    if (req.params && req.params.id) {
        let cartid = req.params.id;
        await Cartitems.findByIdAndDelete(cartid)
            .then(()=> {
                res.status(200).send({status: 'cart item removed successfully'});
            }).catch((error) => {
                res.status(500).send({ status: 'Error in deleting cart items', error: error.msg });
            })
            
           
    }
}

//update the cartitem quantity
const updatecartitems = async (req, res) => {
    if (req.params && req.params.id&& req.body) {
        let cartid = req.params.id;
        let quantity = req.params.quantity;
        await Cartitems.findByIdAndUpdate(cartid, { $set: { quantity: req.body.quantity} })
            .then(data => {
                res.status(200).send({ status: "Quantity updated" });
            }).catch(error => {
                console.log({ status: "Error in updating the quantity of items", error: error.message });
            })

    }
}

const getallgiftitems=async (req, res) => {
    
        await GetItems.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            console.log({ error: error.message });
        });
            
         }

  
    //get flower category count
    
const getallflowercategory = async (req, res) => {
    if (req.params && req.params.category) {
        let cid = req.params.category;
        await GetItems.find({ "category": { $eq: cid } }).countDocuments()
            .then(data => {
                res.status(200).send({ tot: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
        
    }
}

const getcartno = async (req, res) => {
    if (req.params && req.params.username) {
        let user = req.params.username;
        await Cartitems.find({ "quantity": { $eq: user } }).countDocuments()
            .then(data => {
                res.status(200).send({ tot: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    CreateCart,
    getItemById,
    getcartItemByuserId,
    ondelete,
    updatecartitems,
    getallgiftitems,
    getallflowercategory,
    getcartno
};