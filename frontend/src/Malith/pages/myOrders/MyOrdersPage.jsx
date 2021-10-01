import React, { useEffect, useState } from 'react'
import Navbar from '../../component/LandingPageComponent/navbar/Navbar';
import Topbar from '../../component/LandingPageComponent/topbar/Topbar';
import Footer from '../../component/LandingPageComponent/footer/Footer';
import OrderSideBar from '../../component/myOrdersComponet/orderSidebarCard/OrderSideBar';
import MyOrderCardGrp from '../../component/myOrdersComponet/myOrderLists/myOrderCardGrp/MyOrderCardGrp';
import SideAdd from '../../component/WishlistComponent/sideAppAd/SideAdd';
import axios from 'axios';
import { useLocation } from 'react-router';
import OrderAnalytics from '../../component/myOrdersComponet/orderAnalytics/OrderAnalytics';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { search } = useLocation();

    useEffect(() => {
        document.body.style.backgroundColor = "#e8e8e8";
        console.log(search);
        if(search==="?cat=deleted"){
          console.log("done")
          fetchDeleteOrder();
          
        }
        else{
          fetchOrders();
        }
    }, [search])

    const fetchOrders= async ()=>{
      const res = await axios.get("/myorders/getallorders" + search);
      setOrders(res.data);
    }

    const fetchDeleteOrder= async ()=>{
      const res = await axios.get("/myorders/getallorders" + search);
      setOrders(res.data);
    }


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
      {search==="?cat=ordanalytic" ? <OrderAnalytics/> :<MyOrderCardGrp order={orders}/>}
     
        </div>
</div>
          
        </div>
        <Footer/>
      </>
            
   
        
    )
}
