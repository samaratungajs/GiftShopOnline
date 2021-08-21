import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";
import BuyerRegister from "./Eeswar/components/login/register"
import BuyerLogin from "./Eeswar/components/login/login"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WishListPage from "./Malith/pages/wishlistPage/WishListPage";
import MyOrders from "./Malith/pages/myOrders/MyOrdersPage";
import LineChart from "./Malith/component/myOrdersComponet/lineChart/LineChart";



function App() {
  return (
    <Router>
      <Switch>

        {/* Malith */}
        <Route exact component path="/">
        <LandingPage/>
        </Route>

        <Route exact component path="/abuyer/search">
        <SearchPage/>
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

        <Route path ="/register" component={BuyerRegister} exact/>
        <Route path ="/login" component={BuyerLogin} exact/>




      </Switch>
    </Router>
      


    

  );
}

export default App;
