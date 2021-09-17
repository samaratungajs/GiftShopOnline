import LandingPage from "./Malith/pages/landingPage/LandingPage";
import SearchPage from "./Malith/pages/searchPage/SearchPage";
import { useState } from "react";
import axios from "axios"
import ProductScreen from "./Nivethika/Screen/ProductScreen";
import CartScreen from "./Nivethika/Screen/CartScreen";
import loginnav from "./loginnav";
import Delivery from "./Nivethika/Screen/deliveryScreen";
import Nav from "./Nivethika/SideNavbar/nav1";
import Logincheck from "./Nivethika/Components/logincheck";


import BuyerRegister from "./Eeswar/components/login/register"
import BuyerLogin from "./Eeswar/components/login/login"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WishListPage from "./Malith/pages/wishlistPage/WishListPage";



import Payment from "./Nivethika/Screen/payment";
import Accountant from "./Nivethika/SideNavbar/Accountant";
import Revenue from "./Nivethika/Screen/revenuecharts";


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

          <Route exact component path="/abuyer/search">
            <SearchPage />
          </Route>

          <Route exact component path="/abuyer/wishlist">
            <WishListPage />
          </Route>
          {/* Malith */}


        
          
          
         
         
          <Route exact path='/cart' render={(props) => (<CartScreen {...props} Email={email}/>)} exact></Route>
          {/* <Route exact path='/login' component={login}></Route> */}
          <Route exact path='/logincheck' component={Logincheck}></Route>
          <Route exact path='/delivery' render={(props) => (<Delivery {...props} Email={email}/>)} exact></Route>
          <Route exact path='/payment' render={(props) => (<Payment {...props} Email={email}/>)} exact></Route>
          <Route exact path='/Accountant' component={Accountant}></Route>
          <Route exact path='/revenue' component={loginnav}></Route>
          <Route exact path='/view' component={loginnav}></Route>
          <Route exact path='/product/:id' render={(props) => (<ProductScreen {...props} Email={email}/>)} exact ></Route>
        

        </Switch>
      </section>

      <Route path="/register" component={BuyerRegister} exact />
      <Route path="/login" component={BuyerLogin} exact />




    

    </Router >
      

  
    

  );
}

export default App;
