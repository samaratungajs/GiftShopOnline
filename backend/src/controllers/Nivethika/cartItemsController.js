
const Cartitems = require('../../models/Nivethika/CartItems');
const GetItems = require('../../models/giftItem');
const Payment = require('../../models/Nivethika/payment');
//add items to cart
const CreateCart = async (req, res) => {
    console.log(req.body);
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

//delete cartitems according to username
const payDelete = async (req, res) => {
    if (req.params && req.params.username) {
        const username = req.params.username;
        await Cartitems.deleteMany({username})
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ status:"Error in deleting user" ,error: error.message });
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
    
    await GetItems.find({ "category":"flowers" }).countDocuments()
    .then(data => {
        res.status(200).send({ tot: data });
    }).catch(error => {
        res.status(500).send({ error: error.message });
    });

        
    
}

const getallcakescategory=async (req, res) => {
    
    await GetItems.find({ "category": "cakes" }).countDocuments()
        .then(data => {
            res.status(200).send({ tot: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
    

}

const Rgetallcakescategory = async (req, res) => {
    
    const Rcake = await GetItems.find({ "category": "cakes" });
   
    let totalamount = 0;
    if (Rcake.length > 0) {
        Rcake.map((sub) => {
            totalamount += sub.wholesalePrice * sub.quantity
            console.log(totalamount);
        })
    }
       
    res.status(200).send({ totalamount: totalamount });
}
 

const Rgetallflowercategory = async (req, res) => {
    
    const Rcake = await GetItems.find({ "category": "flowers" });
   
    let totalamount = 0;
    if (Rcake.length > 0) {
        Rcake.map((sub) => {
            totalamount += sub.wholesalePrice * sub.quantity
            console.log(totalamount);
        })
    }
       
    res.status(200).send({ totalamount: totalamount });
}

  
const Rgetallwatchcategory = async (req, res) => {
    
    const Rcake = await GetItems.find({ "category": "watches" });
   
    let totalamount = 0;
    if (Rcake.length > 0) {
        Rcake.map((sub) => {
            totalamount += sub.wholesalePrice * sub.quantity
            console.log(totalamount);
        })
    }
       
    res.status(200).send({ totalamount: totalamount });
}


const Rgetallperfumecategory = async (req, res) => {
    
    const Rcake = await GetItems.find({ "category": "perfume" });
   
    let totalamount = 0;
    if (Rcake.length > 0) {
        Rcake.map((sub) => {
            totalamount += sub.wholesalePrice * sub.quantity
            console.log(totalamount);
        })
    }
       
    res.status(200).send({ totalamount: totalamount });
}
    



const getallwatchcategory=async (req, res) => {
    
    await GetItems.find({ "category": "watches" }).countDocuments()
        .then(data => {
            res.status(200).send({ tot: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
    

}

const getallperfumecategory=async (req, res) => {
    
    await GetItems.find({ "category": "perfume" }).countDocuments()
        .then(data => {
            res.status(200).send({ tot: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
    

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

const totalpay_peruser = async (req, res) => {
    if (req.params && req.params.username) {
        const username = req.params.username;
        const cart=await Cartitems.find({ username: username })
        
        if (cart.length > 0) {
            totamount = 0;
        totdelivery = 0;
        totdiscount = 0;
        totsubtotal = 0;
            cart.map((cart) => {
               
                totsubtotal += cart.price*cart.quantity;
                totdelivery += cart.deliverycharge*cart.quantity;
                 totdiscount += cart.discount*cart.quantity;
                totamount  =totsubtotal+totdelivery-totdiscount;
            })
         
            
        }
       
        res.status(200).send({totamount})
          
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
    getcartno,
    totalpay_peruser,
    payDelete,
    getallcakescategory,
    getallwatchcategory,
    getallperfumecategory,
    Rgetallcakescategory,
    Rgetallflowercategory,
    Rgetallwatchcategory,
    Rgetallperfumecategory

};