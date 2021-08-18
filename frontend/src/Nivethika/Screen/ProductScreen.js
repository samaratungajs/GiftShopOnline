import React, { Component } from 'react';
import "./ProductScreen.css";
import axios from 'axios';



import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';
import Similar from '../Components/N-similarproduct';

class ProductScreen extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            product: [],
            name:'',
            price: 0,
            quantity: '',
            imageURL:''
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let cartitems = {
            username: "shamei",
            product: this.state.product._id,
            productname:this.state.product.productName,
            quantity: this.state.quantity,
            price: this.state.product.pricePItem,
            imageURL: this.state.product.imageURL,
            deliverycharge: this.state.product.deliveryCpItem,
            discount:this.state.product.discountPItem
            
            
        }
        console.log('Data to send', cartitems);
        axios.post('http://localhost:9999/cartApi/createCart', cartitems)
            .then(response => {
                alert('Data successfuly inserted');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
  
            })
               

    }
  
        componentDidMount() {
            axios.get(`http://localhost:9999/cartApi/getItems/${this.props.match.params.id}`)
                .then(response => {
                    this.setState({product: response.data.data });
                    console.log(response.data.data);
             
                  
                })
        
    
    }

    render() {
        return (
           <div>
             <Topbar/>   
            <div className="productscreen">
                <div className="productscreen_left">
                    <div className="left_image">
                        <img className="left_image"src={this.state.product.imageURL} alt="product name" />
                         </div>

                        <div className="left_info">

                            <p className="left_name" name="name" value={this.state.name} onChange={this.onChange}>{this.state.product.productName}</p>
                        <p name="price" value={this.state.price} onChange={this.onChange}>Price:    LKR   {this.state.product.pricePItem}</p>
                            <p>Description:        {this.state.product.description}</p>
                            
                            <p name="Discount" value={this.state.product.discountPItem} onChange={this.onChange}>Discount:   LKR  {this.state.product.discountPItem}</p>
                    </div>
                </div>
                <div className="productscreen_right">
                    <div className="right__info">
                        <p>
                                Delivery charge:<span> LKR  {this.state.product.deliveryCpItem }</span>
                        </p>
                        <p>
                            Status:<span>In Stock</span>
                        </p>
                        <p>
                            Qty
                                <select name="quantity" value={this.state.quantity} onChange={this.onChange}>
                                <option value="hidden">Select quantity</option>
                                     <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                            </select>
                        </p>
                        <p>
                            <button type="button" id="addbtn" class="btn btn-primary" onClick={this.onSubmit}>Add to cart</button>
                            </p>
                            <p>
                           <button type="button" id="buybtn" class="btn btn-primary"> Buy now</button>
                        </p>
                        </div>
                        
                       
                    </div>

                  

                
                </div>
               

                <div>
             
                    <div>
                  
                    </div>
                    <Similar/>
                </div>
                
                    
                < Footer/>
            </div>
            
            
         
                
        )
    }



}

export default ProductScreen;