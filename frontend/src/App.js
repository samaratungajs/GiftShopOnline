import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";
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


      </Switch>
    </Router>
      


    

  );
}

export default App;
