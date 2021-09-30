import React, { Component } from 'react';
import "./stepnavigation.css";
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import "./Gift.css";

import Card from './cardpayment';
import Paypal from './paypal';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';
import cardpayment from './cardpayment';

class stepnavigation extends Component{
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


<div class="md-stepper-horizontal blue">
    <div class="md-step active done">
      <div class="md-step-circle"><span1>1</span1></div>
      <div class="md-step-title">Shopping cart</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active editable">
      <div class="md-step-circle"><span1>2</span1></div>
      <div class="md-step-title">Delivery Information</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active">
      <div class="md-step-circle"><span1>3</span1></div>
      <div class="md-step-title">Confirmation & Payment</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
  
  </div>
</div>
                
        )
    }



}

export default stepnavigation;