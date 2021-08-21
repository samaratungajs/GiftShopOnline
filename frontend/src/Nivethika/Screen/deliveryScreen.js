import React, { Component } from 'react';
import "./ProductScreen.css";
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Step from './deliverystepnavigation';
import "./Gift.css";

import Gift from './Gift';
import Buy from './Buy';
import Store from './Store';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';

class deliveryScreen extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = {
            selectedOption: 'gift'                                                                                 
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
                                    <h4> <label>Purchase option</label></h4>
                                    
               
 <RadioGroup rootColor="#171717"onChange={this.onChange} horizontal value="gift">
<RadioButton value="gift" name="gift" rootColor="#171717" pointColor="#185ac4"  >
<i class="fa fa-gift" aria-hidden="true"></i>      Send as a gift
  </RadioButton>
  <RadioButton value="myself" rootColor="#171717" pointColor="#185ac4">
  <i class="fa fa-female" aria-hidden="true"></i> Buy for myself
  </RadioButton>
  <RadioButton value="store" rootColor="#171717"pointColor="#185ac4" >
  <i class="fa fa-shopping-bag" aria-hidden="true"></i> Store pickup
  </RadioButton>

</RadioGroup>

                                    

        
          </div></div></div></div>

               
            </div>
           
            {this.state.selectedOption == "gift" && <div>
                <Gift/>
                </div>}
                {this.state.selectedOption == "myself" && <div>
                <Buy/>
                </div>}
                {this.state.selectedOption == "store" && <div>
                    <Store />
                </div>}
           
                <div>
                    
                <Footer/>
            </div>
                 
         </div>
                
        )
    }



}

export default deliveryScreen ;