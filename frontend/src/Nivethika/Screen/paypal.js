import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from "axios"
import PayPal from "./Paypal1";

function Paypal() {
  const [checkout, setCheckOut] = useState(false);

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
    <div className="App">
     <h4 align="center"> Click Continue to PayPal to log in and confirm your purchase. You'll be sent back to this page to finish up.</h4>
      {checkout ? (
        <Route  render={(props) => (<PayPal {...props} Email={email}/>)} exact></Route>
      ) : (
        <button align="center" class="btn btn-primary"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout to Paypal
        </button>
      )}
    </div>
  );
}

export default Paypal;