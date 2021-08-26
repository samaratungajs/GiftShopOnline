// import LandingPage from "./Malith/pages/landingPage/LandingPage";
// import SearchPage from "./Malith/pages/searchPage/SearchPage";
// import BuyerRegister from "./Eeswar/components/login/register"
// import BuyerLogin from "./Eeswar/components/login/login"
import managerDashboard from "./Jayamini/pages/dashboard"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import addItems from "./Jayamini/pages/addItems"
import nav from "./Jayamini/components/Navbar"
import viewItems from "./Jayamini/pages/viewItems"
import supplierItems from "./Jayamini/pages/supplierItems";
import approveItems from "./Jayamini/pages/approveProduct";
import productReport from "./Jayamini/pages/productReport";
import supplierStatistics from "./Jayamini/pages/supplierStatistics";



function App() {
  return (
    <Router>
      <Switch>

        {/* Malith */}
        {/* <Route exact component path="/">
        <LandingPage/>
        </Route>

        <Route exact component path="/abuyer/search">
        <SearchPage/>
        </Route> */}
        {/* Malith */}
{/* 
        <Route path ="/register" component={BuyerRegister} exact/>
        <Route path ="/login" component={BuyerLogin} exact/> */}

        {/* Jayamini */}
        <Route path ="/panel" component={nav} exact/>
        <Route path ="/additems" component={addItems} exact/>
        <Route path ="/viewitems" component={viewItems} exact/>
        <Route path ="/suppitems" component={supplierItems} exact/>
        <Route path ="/approveitems" component={approveItems} exact/>       
        <Route path ="/itemsreport" component={productReport} exact/>
        <Route path ="/supplierstats" component={supplierStatistics} exact/> 
        <Route path ="/managerdash" component={managerDashboard} exact/>   
        {/* Jayamini */}


      </Switch>
    </Router>
      


    

  );
}

export default App;
