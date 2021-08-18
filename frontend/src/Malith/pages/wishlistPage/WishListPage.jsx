import React, { Component } from "react";
import Footer from "../../component/LandingPageComponent/footer/Footer";
import Topbar from "../../component/LandingPageComponent/topbar/Topbar";
import SideAdd from "../../component/WishlistComponent/sideAppAd/SideAdd";
import WishlistCardGrp from "../../component/WishlistComponent/wishlist/wishlistCardGrp/WishlistCardGrp";

export default class WishListPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#e8e8e8";
  }
  render() {
    return (
      <>
        <Topbar />

        <div class="container-fluid p-4 mt-50 mb-50" style={{fontFamily:"'Poppins Regular', sans-serif"}}>
        <div class="row">

<div class="col-sm-3 col-lg-2">
    
    <SideAdd/>

</div>

<div class="col-sm-9 col-lg-10 p-4" >
      
        <WishlistCardGrp/>
        </div>
</div>
          
        </div>
        <Footer/>
      </>
    );
  }
}
