import './CartItem.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9999/cartApi/getcartItems/kavin')
            .then(response => {
                this.setState({ product: response.data.data });
                console.log(response.data.data);

            })


    }






    render() {
        return (

            <div className="cartitem">
                <div >


                    <img className="cartitem_image" src={this.state.product.imageURL} alt="productName"></img>
                </div>
                <Link to={'/product/${111}'} className="cartitem_name">
                    <p>Product 1</p>
                </Link>


                <p className="cartitem_price">{this.state.product.price}</p>
                <select className="cartitem__select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <button className="cartitem_deleteBtn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>



        )
    }



}

export default CartItem;