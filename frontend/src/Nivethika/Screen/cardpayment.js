import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import "./report.css"
import "./Gift.css";

import Gift from './Gift';
import Buy from './Buy';
import Store from './Store';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';

class cardpayment extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.thanks = this.thanks.bind(this);
        this.state = {
            username: this.props.Email,
            selectedOption: 'paypal',
            amount: 0,
            items: [],
            options: []
        }
    }

    thanks(token) {

        let subject = {
            username: this.props.Email,

            orderitems: this.state.options,
            amount: Number(Object.values(this.state.amount)),
            status: 'completed',
            Date: new Date().toDateString() + ""

        }
        console.log(this.state.options);
        console.log(subject);
        axios.post('http://localhost:9999/pay/payment', subject)
            .then(response => {
                console.log(subject);
            }).catch(error => {

                console.log(error.message);
                alert(error.message);

            })
        axios.delete(`http://localhost:9999/cartApi/deleteusername/${this.state.username}`)
            .then(response => {
                console.log('deleted cart user successfully');
            }).catch(error => {

                console.log(error.message);
                alert(error.message);

            })
        console.log(token);
    }

    onChange(e) {

        this.setState({ selectedOption: e });


    }
    componentDidMount() {
        console.log(this.props.Email);
        axios.get(`http://localhost:9999/cartApi/gettotal/${this.state.username}`)
            .then(response => {
                this.setState({ amount: response.data });
                console.log(this.state.amount);
                console.log(Object.values(this.state.amount));
                console.log(Number(Object.values(this.state.amount)))


            })

        axios.get(`http://localhost:9999/cartApi/getcartItems/${this.state.username}`)
            .then(response => {
                console.log(response.data.data);

                let data = [];
                this.setState({ items: response.data.data }, () => {
                    this.state.items.map((item, index) => {

                        data.push(item.product)
                    });
                    this.setState({ options: data })
                })
                console.log(this.state.options)
            }).catch(error => {

                console.log(error.message);

            })



    }





    render() {
        return (

            <div class="center1">

                <StripeCheckout
                    stripeKey="pk_test_51JXBWcHt6IMazlmL8u1g2nU4AlrX4pixRD5Fuchm8FyfQUPGjau20Bw7dYaixS4nVi3kYBPEOM7hcCcaQ7GWOJbQ0015Z4OMnG"
                    name="Card payment"
                    amount= {Number(Object.values(this.state.amount))}
                    token={this.thanks}
                    currency="LKR"
                    description="Credit/Debit"


                />


            </div>

        )
    }



}

export default cardpayment;