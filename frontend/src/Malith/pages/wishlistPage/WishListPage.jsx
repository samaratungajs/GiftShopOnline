import axios from "axios";
import React, {useEffect, useState } from "react";
import Footer from "../../component/LandingPageComponent/footer/Footer";
import Topbar from "../../component/LandingPageComponent/topbar/Topbar";
import SideAdd from "../../component/WishlistComponent/sideAppAd/SideAdd";
import WishlistCardGrp from "../../component/WishlistComponent/wishlist/wishlistCardGrp/WishlistCardGrp";
import Navbar from "../../component/LandingPageComponent/navbar/Navbar"
export default function WishListPage() {

const [wishlist, setwishlist] = useState([])

  useEffect(() => {
    document.body.style.backgroundColor = "#e8e8e8";
    const fetchWishlist = async () =>{
    const res = await axios.get("/awishlist/getwishlistitem");
       setwishlist(res.data.data);
     
       
  }
        fetchWishlist();

  }, [])

    return (
      <>
        <Topbar />
        <Navbar/>

        <div class="container-fluid p-4 mt-50 mb-50" style={{fontFamily:"'Poppins Regular', sans-serif"}}>
        <div class="row">

<div class="col-sm-3 col-lg-2">
    
    <SideAdd/>

</div>

<div class="col-sm-9 col-lg-10 p-4" >
      
        <WishlistCardGrp wishlists={wishlist}/>
        </div>
</div>
          
        </div>
        <Footer/>
      </>
    );
  }

