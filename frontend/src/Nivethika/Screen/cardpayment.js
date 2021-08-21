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

class cardpayment extends Component{
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
                            <h3 class="text-center">Credit Card Payment</h3>
                            <hr />
                            <div class="alert alert-info p-2 pb-3">
                                <a class="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>×</samp></a>
                                CVC code is required.
                            </div>


                            <form class="form" role="form" id="form" onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="cc_name">Email address</label>
                                    <input type="email" class="form-control" id="email" name="email" required="required" value={this.state.email} onChange={this.onChange} />
                                </div>

                                <div class="form-group">
                                    <label for="cc_name">Card Holder's Name</label>
                                    <input type="text" class="form-control" id="cc_name" name="cardholder" required="required" value={this.state.cardholder} onChange={this.onChange} />
                                </div>

                                <div class="form-group">
                                    <label>Card Number</label>
                                    <input type="text" class="form-control" autocomplete="off" maxlength="20" name="cardnumber" required="" value={this.state.cardnumber} onChange={this.onChange} />
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-12">Card Exp. Date</label>
                                    <div class="col-md-6">
                                    <input type="date" class="form-control" autocomplete="off" maxlength="20" name="cardnumber" required="" value={this.state.cardnumber} onChange={this.onChange} /> 
                                    </div>
                                  
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" name="cvc" autocomplete="off" maxlength="3" title="Three digits at back of your card" required="" placeholder="CVC" value={this.state.cvc} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-md-12">Amount</label>
                                </div>

                                <div class='form-row'>
                                    <div class='col-md-12'>
                                        <div class='form-control total btn btn-info'>
                                            Total:
                                            <span class='amount'>Rs.300</span>
                                        </div>
                                    </div>

                                </div>
                                <hr />






                                <input type="hidden" name="to_name" id="to_name" value={this.state.cardholder} />
                                <input type="hidden" name="to_email" id="to_email" value={this.state.email} />

                                <button type="submit" id="N-button" class="btn btn-success btn-lg btn-block" align="center" onClick={this.onUpdate}>Submit</button><br/><br/>


                                <script type="text/javascript"
                                    src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


                            </form>

                        </div>
                    </div>
                </div>
                 
         </div>
                
        )
    }



}

export default cardpayment;