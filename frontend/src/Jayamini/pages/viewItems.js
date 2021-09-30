import React, { Component } from 'react';
import axios from 'axios';
import Nav from "../components/Navbar"
import TopNav from "../components/topNav";
import CrudTable from "../components/crudTable";
import Products from "../components/productCard";
import '../components/productCard.css';

class Researcher extends Component {
  constructor(props) {
    super(props);
    
    document.body.classList.add("no-sroll");
    this.state = {
      productName: '',
      brand: '',
      supplier: "giftery imports",
      category: '',
      description:'',
      quantity: 0,
      pricePItem: 0,
      wholesalePrice: 0,
      imgURL: '',
      discountPItem:0,
      deliveryCpItem: 0,
      status: "approved",
      files: ''

    }


  }



onArchive(e) {
  window.location=`/archive`
}

render() {
    return (
     
      <div className="row">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-5 bg-secondary bg-opacity-10">
              <TopNav/>
            <div className="m-5 mt-3">
              <h3 align="center" >Gift Items</h3>      
              
              <Products/>
            </div>
            </div>
          </div>
        

    )
  }
}

export default Researcher;