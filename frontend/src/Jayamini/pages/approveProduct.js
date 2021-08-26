import React, { Component } from 'react';
import axios from 'axios';
import Nav from "../components/Navbar"
import TopNav from "../components/topNav";
import CrudTable from "../components/crudTable";
import Products from "../components/approveProduct";

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



render() {
    return (
     
      <div className="row">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-5 bg-secondary bg-opacity-10">
              <TopNav/>
            <div className="m-5 ">
              
                {/* <div >
                  <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                    <label  for="form1">Search</label>
                  </div>
                  <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                  </button>
                </div> */}
                

              <Products/>
            </div>
            </div>
          </div>
        

    )
  }
}

export default Researcher;