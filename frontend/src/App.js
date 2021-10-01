import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";


import ProductScreen from "./Nivethika/Screen/ProductScreen";
import CartScreen from "./Nivethika/Screen/CartScreen";
import loginnav from "./loginnav";
import Delivery from "./Nivethika/Screen/deliveryScreen";
import Nav from "./Nivethika/SideNavbar/nav1";
import Logincheck from "./Nivethika/Components/logincheck";


import BuyerRegister from "./Eeswar/components/login/buyerregister"
import BuyerLogin from "./Eeswar/components/login/buyerlogin"
import SupplierRegister from "./Eeswar/components/login/supplierRegister"
import SupplierLogin from "./Eeswar/components/login/supplierlogin"
import SupplierProfile from "./Eeswar/components/User/getSupplierdetailsByEmail"
import Dash from './Eeswar/components/adminpanel/dashboard'
import AddSupplieritem from './Eeswar/components/SupplierItem/addsupplierItems'
import EditSupplieritem from './Eeswar/components/SupplierItem/editsupplierItem'
import GetallSupplieritem from './Eeswar/components/SupplierItem/getallSupplieritembyEmail'
import AddUser from './Eeswar/components/adminpanel/addUser'
import Userchart from "./Eeswar/components/adminpanel/userchart"
import UserLogin from './Eeswar/components/login/userlogin'

import React, {useState} from 'react';
import axios from 'axios';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WishListPage from "./Malith/pages/wishlistPage/WishListPage";
import MyOrders from "./Malith/pages/myOrders/MyOrdersPage";

import Payment from "./Nivethika/Screen/payment";
import Accountant from "./Nivethika/SideNavbar/Accountant";
import Revenue from "./Nivethika/Screen/revenuecharts";


import addItems from "./Jayamini/pages/addItems"
import nav from "./Jayamini/components/Navbar"
import viewItems from "./Jayamini/pages/viewItems"
import supplierItems from "./Jayamini/pages/supplierItems";
import approveItems from "./Jayamini/pages/approveProduct";
import productReport from "./Jayamini/pages/productReport";
import supplierStatistics from "./Jayamini/pages/supplierStatistics";
import itemsArchive from "./Jayamini/pages/archiveitems";
import itemsEdit from "./Jayamini/pages/editItems";
import managerDashboard from "./Jayamini/pages/dashboard"
import BuyerReport from "./Malith/pages/buyerReport/BuyerReport";
import OrderAnalytics from "./Malith/component/myOrdersComponet/orderAnalytics/OrderAnalytics";


function App() {
  const [inactive, setInactive] = useState(false);

  const access_token = localStorage.getItem('token')
    const[email , setUsername] = useState("")

        let config = {
          headers: {
            'Authorization': 'Bearer ' + access_token 
          }
        }
        axios.get( 
            'http://localhost:9999/buyerlogin/post',
            config)
          .then( ( response ) => {
            if(response.data.message){
                alert(response.data.message)  
            }else{   
              setUsername(response.data.user.email)
            }         
          } )
          .catch()




  return (
    <Router>

      <section>
        <Switch>

          {/* Malith */}
          <Route exact component path="/">
            <LandingPage />
          </Route>

        <Route exact component path="/abuyer/myorders">
        <MyOrders/>
        </Route>

        <Route exact component path="/abuyer/wishlist">
        <WishListPage/>
        </Route>

          <Route exact component path="/abuyer/search">
            <SearchPage />
          </Route>

          <Route exact component path="/abuyer/wishlist">
            <WishListPage />
          </Route>

          <Route exact component path="/abuyer/orderanalytics">
            <OrderAnalytics/>
          </Route>

          <Route exact component path="/abuyer/buyerreport">
            <BuyerReport/>
          </Route>
          {/* Malith */}


                 
     {/* Nivethika */}
          <Route exact path='/cart' render={(props) => (<CartScreen {...props} Email={email}/>)} exact></Route>
          {/* <Route exact path='/login' component={login}></Route> */}
          <Route exact path='/logincheck' component={Logincheck}></Route>
          <Route exact path='/delivery' render={(props) => (<Delivery {...props} Email={email}/>)} exact></Route>
          <Route exact path='/payment' render={(props) => (<Payment {...props} Email={email}/>)} exact></Route>
          <Route exact path='/Accountant' component={Accountant}></Route>
          <Route exact path='/revenue' component={loginnav}></Route>
          <Route exact path='/view' component={loginnav}></Route>
          <Route exact path='/product/:id' render={(props) => (<ProductScreen {...props} Email={email} />)} exact ></Route>
             {/* Nivethika */}
          
          
         
         
        
        {/* Jayamini */}
        <Route path ="/panel" component={nav} exact/>
        <Route path ="/additems" component={addItems} exact/>
        <Route path ="/viewitems" component={viewItems} exact/>
        <Route path ="/suppitems" component={supplierItems} exact/>
        <Route path ="/approveitems" component={approveItems} exact/>       
        <Route path ="/itemsreport" component={productReport} exact/>
        <Route path ="/supplierstats" component={supplierStatistics} exact/> 
        <Route path ="/managerdash" component={managerDashboard} exact/>   
        <Route path ="/archive" component={itemsArchive} exact/>   
        <Route path ="/editgift/:id" component={itemsEdit} exact/>   
        {/* Jayamini */}


        {/* Eeswar */}
        <Route path="/register" component={BuyerRegister} exact />
        <Route path="/login" component={BuyerLogin} exact />
        <Route path="/supplier/login" component={SupplierLogin} exact />
        <Route path="/dashboard" component={Dash} exact />
        <Route path="/supplier/register" component={SupplierRegister} exact />
        <Route path="/user/register" component={AddUser} exact />
        <Route path="/user/login" component={UserLogin} exact />
        
        <Route path="/supplier/create" render={(props) => (<AddSupplieritem Email={email}/>)} exact />

        

        <Route path="/userchart" component={Userchart} exact />
        <Route path="/supplier/:email" component={SupplierProfile} exact />
        <Route path="/supplier/edit/:id" render={(props) => (<EditSupplieritem {...props} Email={email}/>)} exact />

        <Route path="/items/:email" render={(props) => (<GetallSupplieritem  Email={email}/>)} exact />
        {/* Eeswar */}


        </Switch>
      </section>

      



    

    </Router >
      

  
    

  );
}

export default App;
