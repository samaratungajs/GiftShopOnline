import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";
import BuyerRegister from "./Eeswar/components/login/register"
import BuyerLogin from "./Eeswar/components/login/login"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



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
        {/* Malith */}

        <Route path ="/register" component={BuyerRegister} exact/>
        <Route path ="/login" component={BuyerLogin} exact/>




      </Switch>
    </Router>
      


    

  );
}

export default App;
