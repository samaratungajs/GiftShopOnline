import React, { Component } from "react";
import ProductCard from "../productCard/ProductCard";
import "./priceRange.css";

export default class ProductCardGrp extends Component {
  render() {
    return (
      <>
        <div className="container mt-4 ml-1" style={{ marginBottom: "10rem" }}>
          <div className="row">
              <div className="col-sm-4">
                  <div className="row">
                <div class="Arange-slider">
                <span>
                    <h5>Price Range</h5>
                    <input type="number" placeholder="0" min="0" max="120000" className="ApriceRangeBox"/><b>-</b>
                    <input type="number" placeholder="0" min="0" max="120000" className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </span>
                 </div>
                 </div>



              </div>
              <div className="col-sm-4"></div>
              <div className="col-sm-4"><div className="AviewGrp"><h6 className="AviewLabel"><b>View</b></h6><i className="fas fa-th-large AviewIcon"></i><i className="fas fa-list AviewIcon"></i> </div></div>
           
        </div>


          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
</div>
      </>
    );
  }
}
