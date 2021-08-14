import React from "react";
import Logo from "./GifteryLogo.png";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="Aheader my-0 sticky-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12">
            <div className="py-3">
              <a href="/"><img src={Logo} alt="" style={{ maxWidth: "90px" }} /></a>
            </div>
          </div>
          
          <div className="col-md-6 col-12 text-center">
          <form className="d-flex mt-3"style={{maxWidth:"600px"}}>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <a href="/abuyer/search" className="btn btn-dark" type="submit">Search</a>
      </form>
          </div>

          <div className="col-md-3 col-12 text-right">
            {/* <p className="my-md-4 Aheader-links">
              <a href="#" className="px-2">
                <i class="fas fa-sign-in-alt pr-2"></i>Sign In
              </a>
              <a href="#" className="px-2">
                |
              </a>
              <a href="#" className="px-2">
                Create an Account<i class="fas fa-user-plus pl-2"></i>
              </a>
            </p> */}
            <div className="mt-3">
            <a href="#" className="AtopCart">
                
            <i className="fas fa-shopping-cart AhoverTop my-2 Anavicon" style={{fontSize:"25px"}}></i> 
                   <span
                    className="position-absolute badge rounded-pill bg-warning mb-2"
                    style={{ fontSize: "0.9em" }}
                  >
                    5
                  </span>
                  
            </a>

            <a href="#" className="Adropdown AtopUser">
                
            <i className="fas fa-user AhoverTop my-2 Anavicon Adropbtn" style={{fontSize:"25px"}}></i> 
            <div class="Adropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
