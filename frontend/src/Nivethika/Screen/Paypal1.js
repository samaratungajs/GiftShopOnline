import React, { Component } from 'react';
import axios from 'axios';


class Paypal1 extends Component {
    constructor(props) {
        super(props);

        this.paypal = React.createRef();
  
        this.state = {
            username:'',
            amount: 0,
            items:[],
            options: [],
            selectedCartitems:[]
        }
    
    
    }
   
   
    componentDidMount() {
        console.log(this.props.Email);
        axios.get(`http://localhost:9999/cartApi/gettotal/${this.props.Email}`)
        .then(response => {
            this.setState({amount: response.data });
            console.log(this.state.amount);
            console.log(Object.values(this.state.amount));
            console.log(Number(Object.values(this.state.amount)))
          
          
        })

        axios.get(`http://localhost:9999/cartApi/getcartItems/${this.props.Email}`)
        .then(response => {
            console.log(response.data.data);

            let data = [];
            this.setState({ items: response.data.data }, () => {
                this.state.items.map((item, index) => {
                   
                    data.push(item.product)
                });
                this.setState({options:data})
            })
            console.log(this.state.options)
    }).catch(error => {
     
        console.log(error.message);
      
    })
        

       
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "CAD",
                                    value:Number(Object.values(this.state.amount))
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                  
                    console.log(this.state.options);
                    let subject = {
                        username: this.props.Email,
                       
                        orderitems: this.state.options,
                        amount: Number(Object.values(this.state.amount)),
                        status: 'completed',
                        Date:new Date().toDateString() + ""
                    
                    }
                    console.log(this.state.items);
                    console.log(subject);
                    axios.post('http://localhost:9999/pay/payment',subject)
                        .then(response => {
                            console.log(subject); 
                    }).catch(error => {
                       
                        console.log(error.message);
                      
                    })
                    axios.delete(`http://localhost:9999/cartApi/deleteusername/${this.props.Email}`)
                    .then(response => {
                        console.log('deleted cart user successfully');
                 }).catch(error => {
                   
                    console.log(error.message);
                    alert(error.message);
            
                })

                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(this.paypal.current)
   
}
     

    render() {
        return (
            <div>

<div ref={this.paypal}></div>
         </div>
                
        )
    }



}

export default Paypal1;