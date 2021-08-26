import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";

import ProductScreen from "./Nivethika/Screen/ProductScreen";
import CartScreen from "./Nivethika/Screen/CartScreen";
import loginnav from "./loginnav";
import delivery from "./Nivethika/Screen/deliveryScreen";
import Nav from "./Nivethika/SideNavbar/nav1";


import BuyerRegister from "./Eeswar/components/login/register"
import BuyerLogin from "./Eeswar/components/login/login"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WishListPage from "./Malith/pages/wishlistPage/WishListPage";
import MyOrders from "./Malith/pages/myOrders/MyOrdersPage";
import LineChart from "./Malith/component/myOrdersComponet/lineChart/LineChart";



import payment from "./Nivethika/Screen/payment";
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


function App() {
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

        <Route exact component path="/abuyer/chart">
        <LineChart/>
        </Route>
        {/* Malith */}
          <Route exact component path="/abuyer/search">
            <SearchPage />
          </Route>

          <Route exact component path="/abuyer/wishlist">
            <WishListPage />
          </Route>
          {/* Malith */}


        
          <Route exact path='/product/:id' component={ProductScreen}></Route>
          
         
         
          <Route exact path='/cart' component={CartScreen}></Route>
          {/* <Route exact path='/login' component={login}></Route> */}
          <Route exact path='/delivery' component={delivery}></Route>
          <Route exact path='/payment' component={payment}></Route>
          <Route exact path='/Accountant' component={Accountant}></Route>
          <Route exact path='/revenue' component={loginnav}></Route>
          <Route exact path='/view' component={loginnav}></Route>
        
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
        <Route path ="/editgift" component={itemsEdit} exact/>   
        {/* Jayamini */}


        </Switch>
      </section>

      <Route path="/register" component={BuyerRegister} exact />
      <Route path="/login" component={BuyerLogin} exact />




    

    </Router >
      

  
    

  );
}

export default App;
