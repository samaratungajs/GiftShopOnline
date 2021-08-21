import React, { Component } from 'react';
import "./ProductScreen.css";
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import "./Gift.css";
import Step from './paystepnavigation';
import Card from './cardpayment';
import Paypal from './paypal';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';
import cardpayment from './cardpayment';

class payment extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
  
        this.state = {
            selectedOption: 'card'                                                                                 
        }
    
    
}

    onChange(e) {
      
        this.setState({ selectedOption: e });
      
    }
   
   
  
     

    render() {
        return (
            <div>

                <div>
                    
                <Topbar/>
            </div>
                <div>
                    
                
                    <Step/>
<div className="container">
        <div class="col-md-6 offset-md-3" align="center">

          <br />
          <div class="card card-outline-secondary p-3 mb-2   text-black border-secondary mb-3" color="blue">
            <div class="card-body">
                                    <h4> <label>Select your payment method</label></h4>
                                    
               
 <RadioGroup rootColor="#171717"onChange={this.onChange} horizontal value="card">
  <RadioButton value="card" name="card1" rootColor="#171717" pointColor="#185ac4" defaultChecked="true">
  <img src="https://studiosinn.com/assets/public/img/credit-card-icons-png.png" width="200px" height="28px"></img>
  </RadioButton>
  <RadioButton value="paypal" rootColor="#171717" pointColor="#185ac4">
  <img src="https://image.flaticon.com/icons/png/128/888/888870.png" width="30px" height="30px"></img>
  </RadioButton>


</RadioGroup>

                                    

        
          </div></div></div></div>

               
            </div>
           
            {this.state.selectedOption == "card" && <div>
                <Card/>
                </div>}
                {this.state.selectedOption == "paypal" && <div>
                <Paypal/>
                </div>}
               
           
                <div>
                    
              
                </div>
                
                <div>
               
                </div>
                <Footer/>
         </div>
                
        )
    }



}

export default payment;