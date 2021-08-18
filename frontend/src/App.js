import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";
import ProductScreen from "./Nivethika/Screen/ProductScreen";
import CartScreen from "./Nivethika/Screen/CartScreen";
import loginnav from "./loginnav";
import delivery from "./Nivethika/Screen/deliveryScreen";
import Nav from "./Nivethika/SideNavbar/nav1";


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
        <LandingPage/>
        </Route>

        <Route exact component path="/abuyer/search">
        <SearchPage/>
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
    </Router>
      


    

  );
}

export default App;
