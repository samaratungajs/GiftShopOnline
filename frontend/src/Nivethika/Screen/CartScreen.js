import React, { Component } from 'react';
import "./CartScreen.css";
import "../Components/CartItem.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';

import Cartnavigation from './cartnavigation';
import CartItem from '../Components/CartItem';

class  CartScreen extends Component{
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.quantityhandler = this.onChange.bind(this);
        this.state = {
            product: [],
            quantity: 0,
            total: 0,
            totquantity:0,
            subtotal: 0,
            qty: 0,
            delivery: 0,
            discount:0
           
        
        }
    }

    onChange(e,itemid,value) {
        this.setState({ [e.target.quantity]: e.target.value });
        let sub = {
            quantity: value
        }
        axios.put(`http://localhost:9999/cartApi/updatecart/${itemid}`,sub)
        .then(response => {
            alert('Quantity updated');
            window.location.reload(true);
            

        }).catch(error => {
            console.log(error.message);
            alert(error.message);
        })
       
       
  }
      
    onSubtotal() {
        
    }
    componentDidMount() {
        axios.get('http://localhost:9999/cartApi/getcartItems/shamei')
            .then(response => {
                this.setState({product: response.data.data });
                console.log(response.data.data);
          
              
            })
    }



    onDelete(e,itemid) {
        axios.delete(`http://localhost:9999/cartApi/deletecart/${itemid}`)
            .then(response => {
                alert('Item is removed from the cart');
                window.location.reload(true);
               
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }
    onCalculate() {
        this.setState({ [this.state.subtotal]: this.state.subtotal += this.state.total });
    }

    quantityhandler(itemid) {
        this.state.quantity = itemid.quantity;
    }
    onUpdate(e,itemid) {
        
      
    }

    render() {
        return (
            <div>
                <Topbar />
                
                <Cartnavigation/>
            <div className="cartScreen">
                <div className="cartScreen__left">
                    <h2>Shopping cart</h2>
                        {this.state.product.length  === 0 &&
                            <div>
                                Your Cart Is Empty <Link to="/">Go Back</Link>
                            </div>}
                        
                            
                            { this.state.product.length > 0 && this.state.product.map((item, index) => (
                        <div key={index} className="card mb-3" >
                            <div className="cartitem">
                                <div >
          
                    
                                    <img className="cartitem_image" src={item.imageURL} alt="productName"></img>
                                </div>
                               
                                        <p><h5>{item.productname}</h5></p>
                            
        
               
                            
                           
                        
                                        <select className="cartitem__select" name="quantity"  defaultValue={item.quantity} onChange={e=>this.onChange(e, item._id,e.target.value)}
                
                                        >
                                        <option value="1">Select Qty</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>

                               <h5> <p className="cartitem_price">{this.state.total=item.price * item.quantity}</p></h5>
                                      
                                   
                               
                                <button type="button" className="cartitem_deleteBtn" onClick={e => this.onDelete(e, item._id)}  >
                                    <i className="fas fa-trash"></i>
                                </button>
               
                                       <div id="hide"> 
                            
                                      {this.state.subtotal += this.state.total}
                                        {this.state.totquantity += item.quantity}
                                        {this.state.delivery += item.deliverycharge*item.quantity}
                                        {this.state.discount+=item.discount*item.quantity}</div>
                            </div>
            
                        </div>
                    ))}
                    
                    {/* {this.state.product.length == 0}{
                        <div>
                            Cart is empty
                        </div> */}
                    {/* } */}
                </div>








                <div className="cartScreen__right">
                    <div className="cartScreen_info">
                       <h5> <p>Subtotal  (  {this.state.totquantity}  )    :   LKR { this.state.subtotal}</p></h5>
                          <h5>  <p>Delivery charge:  LKR  {this.state.delivery}</p></h5>
                           <h5><p>Discount:   LKR { this.state.discount}</p></h5> 
                            <hr/>
                       
                      <h5>Order total: LKR {this.state.discount+this.state.delivery+this.state.subtotal}</h5> <hr/>
                    </div>

                        
                    <div>
                    <Link to={`/delivery`}><button>Proceed to Checkout</button></Link>
                    </div>

                </div>
                </div>
                <div>
               
                </div>
        <Footer/>
            </div>   
        )
    
    }


}

export default CartScreen;