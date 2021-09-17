import React, { useEffect } from 'react'
import Navbar from '../../component/LandingPageComponent/navbar/Navbar';
import Topbar from '../../component/LandingPageComponent/topbar/Topbar';
import Footer from '../../component/LandingPageComponent/footer/Footer';
import OrderSideBar from '../../component/myOrdersComponet/orderSidebarCard/OrderSideBar';
import MyOrderCardGrp from '../../component/myOrdersComponet/myOrderLists/myOrderCardGrp/MyOrderCardGrp';
import SideAdd from '../../component/WishlistComponent/sideAppAd/SideAdd';

export default function MyOrders() {
    useEffect(() => {
        document.body.style.backgroundColor = "#e8e8e8";
    }, [])

    return (
        <>
         <Topbar/>
        <Navbar/>

        <div class="container-fluid p-4 mt-50 mb-50" style={{fontFamily:"'Poppins Regular', sans-serif"}}>
        <div class="row">

<div class="col-sm-3 col-lg-2">
   <OrderSideBar/>
   <SideAdd/>

</div>

<div class="col-sm-9 col-lg-10 p-4" >
      <MyOrderCardGrp/>
     
        </div>
</div>
          
        </div>
        <Footer/>
      </>
            
   
        
    )
}
