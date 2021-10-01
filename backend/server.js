const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const productManagerAPI = require('./src/api/productManagerAPI');

const cartApi = require('./src/api/Nivethika/cartApi');
const paymentApi = require('./src/api/Nivethika/paymentApi');
const aBuyerAPI = require('./src/api/Malith/buyer.api');
const aWishlistAPI = require('./src/api/Malith/wishlist.api');
const myOrderApi = require("./src/api/Malith/myOrder.api");
const supplierRegisterAPI = require('./src/api/supplierRegisterApi');
const buyerRegisterApi = require("./src/api/buyerRegisterApi");
const buyerlogin = require("./src/routes/buyerlogin");


const delivery_buy = require('./src/api/Nivethika/deliveryapi');

const supplierlogin = require("./src/routes/supplierlogin");
const userlogin = require("./src/routes/userlogin");
const supplierItems = require("./src/api/supplierItemApi");
const adminApi = require("./src/api/adminApi");




const PORT = process.env.PORT || 9999;

app.use(cors());

app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success");
})

app.route('/').get((req, res) => {
    res.send('SPM Project');
});

app.use('/productmanager', productManagerAPI());

app.use('/cartApi',cartApi());
app.use('/pay', paymentApi());
app.use('/delivery',delivery_buy());

app.use('/abuyer', aBuyerAPI());
app.use('/awishlist', aWishlistAPI());
app.use('/myorders', myOrderApi());
app.use('/buyer', buyerRegisterApi());
app.use('/supplier', supplierRegisterAPI());
app.use('/supplieritems', supplierItems());
app.use('/admin', adminApi());

app.use('/buyerlogin', buyerlogin);
app.use('/supplierlogin', supplierlogin);
app.use('/userlogin', userlogin);

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});