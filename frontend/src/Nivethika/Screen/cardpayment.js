import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
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
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.thanks = this.thanks.bind(this);
        this.state = {
            username:this.props.Email,
            selectedOption: 'paypal',
            amount: 0,
            items:[]
        }
    }

    thanks(token) {
       
        console.log(token);
        
    }

    onChange(e) {
      
        this.setState({ selectedOption: e });
        
      
    }
    componentDidMount() {
        console.log(this.props.Email);
        axios.get(`http://localhost:9999/cartApi/gettotal/${this.state.username}`)
        .then(response => {
            this.setState({amount: response.data });
            console.log(this.state.amount);
            console.log(Object.values(this.state.amount));
            console.log(Number(Object.values(this.state.amount)))
          
          
        })

        axios.get(`http://localhost:9999/cartApi/getcartItems/${this.state.username}`)
        .then(response => {
            console.log(response.data.data);
            this.setState({ items: response.data.data })
            console.log(this.state.items)
    }).catch(error => {
     
        console.log(error.message);
      
    })
        
   
  
   }
   
onSubmit(){
    let subject = {
        username: this.props.Email,
       
        orderitems: this.state.items,
        amount:Number(Object.values(this.state.amount))
    }
    console.log(this.state.items);
    console.log(this.state.subject);
    axios.post('http://localhost:9999/pay/payment',subject)
        .then(response => {
            console.log(subject); 
    }).catch(error => {
       
        console.log(error.message);
        alert(error.message);

    })
    }
  
     

    render() {
        return (
         
            <div>{this.props.Email}
                <StripeCheckout
                    stripeKey="pk_test_51JXBWcHt6IMazlmL8u1g2nU4AlrX4pixRD5Fuchm8FyfQUPGjau20Bw7dYaixS4nVi3kYBPEOM7hcCcaQ7GWOJbQ0015Z4OMnG"
                    name="Apple 1kg"
                    amount={Number(Object.values(this.state.amount))}
                    token={this.thanks}
                    currency="INR"
                    description="Fresh apple"
                    onSubmit={this.on}
                 
                />

                 
         </div>
                
        )
    }



}

export default cardpayment;