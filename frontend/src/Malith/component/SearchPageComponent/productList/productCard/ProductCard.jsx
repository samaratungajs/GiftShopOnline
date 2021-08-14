import React, { Component } from 'react'
import img1 from './images/CakeProduct.jpg'
import './productCard.css'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="col-sm-3">
            <div className="card AproductCard my-3" style={{width: "17rem"}}>
  <img className="card-img-top AproductCardImg" src={img1} alt="Card image cap" style={{maxHeight:"16rem"}}/>
  
  <div className="card-body">
  <h3><b>Chocolate Cake</b></h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
        )
    }
}
