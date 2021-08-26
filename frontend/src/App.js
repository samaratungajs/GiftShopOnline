import BuyerRegister from "./Eeswar/components/login/buyerregister"
import BuyerLogin from "./Eeswar/components/login/buyerlogin"
import SupplierRegister from "./Eeswar/components/login/supplierRegister"
import SupplierLogin from "./Eeswar/components/login/supplierlogin"
import SupplierProfile from "./Eeswar/components/User/getSupplierdetailsByEmail"
import Dash from './Eeswar/components/adminpanel/dashboard'
import Session from "./Eeswar/components/login/mainpage"
import AddSupplieritem from './Eeswar/components/SupplierItem/addsupplierItems'
import EditSupplieritem from './Eeswar/components/SupplierItem/editsupplierItem'
import GetallSupplieritem from './Eeswar/components/SupplierItem/getallSupplieritembyEmail'
import AddUser from './Eeswar/components/adminpanel/addUser'
import Userchart from "./Eeswar/components/adminpanel/userchart"
import UserLogin from './Eeswar/components/login/userlogin'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from "react";
import axios from "axios"

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


      <Switch>

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






      </Switch>
    </Router>





  );
}

export default App;
