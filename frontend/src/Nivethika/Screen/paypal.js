import React, { Component } from 'react';

import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import "./Gift.css";

import Gift from './Gift';
import Buy from './Buy';
import Store from './Store';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';

class paypal extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = {
            selectedOption: 'paypal'                                                                                 
        }
    }


    onChange(e) {
      
        this.setState({ selectedOption: e });
      
    }
   
   
  
     

    render() {
        return (
            <div>

<div class="col-md-6 offset-md-3">
                    <br />

                    <div class="card card-outline-secondary">
                        <div class="card-body">
                            <h5 class="text-center">Click Continue to PayPal log in and confirm your purchase.You'll be sent back to this page to finish up</h5>
                            
                            






                                <button type="submit" id="N-button1" class="btn btn-success btn-lg btn-block" align="center" onClick={this.onUpdate}>Continue to Paypal</button><br/><br/>


                   


                            

                        </div>
                    </div>
                </div>
                 
         </div>
                
        )
    }



}

export default paypal;