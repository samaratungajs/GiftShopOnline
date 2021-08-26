const Items = require('../models/giftItem');

const createNewSupllierItem = async (req, res) => {
    if (req.body) {
        const items = new Items(req.body);
        items.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllSuppliersItems = async (req, res) => {
    await Items.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSupplierItemsById = async (req, res) => {
    if (req.params && req.params.id) {
      await Items.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const getSupplierItemsByEmail= async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
      await Items.find({supplier:Email})
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }  

  const EditSupplierItems= async (req, res) => {
        if (req.params && req.params.id) {
        await Items.findByIdAndUpdate(req.params.id,{$set:{productName:req.body.productName,
                                                            brand: req.body.brand, 
                                                            category: req.body.category , 
                                                            description: req.body.description , 
                                                            quantity: req.body.quantity , 
                                                            pricePItem: req.body.pricePItem,
                                                            wholesalePrice: req.body.wholesalePrice,
                                                            discountPItem: req.body.discountPItem,
                                                            deliveryCpItem: req.body.deliveryCpItem,
                                                            imageURL: req.body.imageURL,
                                                            status: req.body.status }})
        .then(data => {
          res.status(200).send("Details updated");
        })
        .catch(error => {
          res.status(500).send({ error: error.message });
        });
      }
  }
  
  const deleteItems = async(req, res) => {
    let itemid = req.params.id;

    await Items.findByIdAndDelete(itemid).then(() => {
        res.status(200).send({ status: "item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })

}


module.exports = {
    createNewSupllierItem,
    getAllSuppliersItems,
    getSupplierItemsById,
    getSupplierItemsByEmail,
    EditSupplierItems,
    deleteItems,
};