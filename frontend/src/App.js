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
        

        </Switch>
      </section>

      <Route path="/register" component={BuyerRegister} exact />
      <Route path="/login" component={BuyerLogin} exact />




    

    </Router >
      

  
    

  );
}

export default App;
