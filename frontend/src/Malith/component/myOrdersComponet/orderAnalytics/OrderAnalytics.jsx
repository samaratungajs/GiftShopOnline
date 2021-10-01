import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './orderAnalytic.css'
import OrderGraph from './OrderGraph'
import RecentTable from './RecentTable'
import { useHistory } from "react-router";

const OrderAnalytics=(props)=> {
  const history = useHistory();

  const [date, setdate] = useState([]);
  const [amount, setamount] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, settotal] = useState(0)
  const [Udate, setUdate] = useState("")
  const [Ddate, setDdate] = useState("")


  useEffect(() => {
      handleChange();
      
  }, [Udate,Ddate])


  const fetchOrders= async ()=>{
    const res = await axios.get("/myorders/getallorders");
    let order = res.data;
    setOrders(order);

    totalAmount(order);

    console.log(orders);
    let data = res.data;


    //chart data
  let x = [];
        for(const dataObj of data){
          x.push(new Date(dataObj.createdAt).toDateString())
        }
       setdate(x);
       
  let y = [];
  for(const dataObj of data){
    y.push(dataObj.amount)
  }
 setamount(y);
      }


      //total amount
    const totalAmount = (o)=>{
      let tot = 0;
      o.map((p)=>(
        tot = tot + parseFloat(p.amount)
      ))
      settotal(tot);
    }


    //handle date range
    const handleChange=async ()=>{
      if(Udate && Ddate){
       const date = `?dLower=${Ddate}&dUpper=${Udate}`
       const res = await axios.get("/myorders/getallorders/" + date);
       let order = res.data;
       setOrders(order);

       setOrders(order);

       totalAmount(order);
   
       console.log(orders);
       let data = res.data;
   
   
       //chart data
     let x = [];
           for(const dataObj of data){
             x.push(new Date(dataObj.createdAt).toDateString())
           }
          setdate(x);
          
     let y = [];
     for(const dataObj of data){
       y.push(dataObj.amount)
     }
    setamount(y);


      }


     else{
      fetchOrders();
      
      }   
       
   }



  const passReportData = ()=>{
    
        history.push({
        pathname: "/abuyer/buyerreport",
        orders,
        Udate,
        Ddate,
        total
      });
    }
  

    return (
        <div className="container-fluid card p-4 ">        
          <h3 className="text-center my-3">Order Analytics</h3>




          <div className="row px-2 py-3">
      <div className="card p-1">
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-inline-flex">
                    <h5 className="h-4 pt-2 mx-2">Duration </h5>
                    <input type="date" placeholder="" min="0" max="120000" onChange={e=> setDdate(e.target.value)} value={Ddate} className="ApriceRangeBox"/><b className="mt-2">-</b>
                    <input type="date" placeholder="" min="0" max="120000" onChange={e=> setUdate(e.target.value)} value={Udate} className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </div>
                <div className="d-inline-flex">
                    
  <button onClick={()=>passReportData()} class="btn btn-warning my-2 text-white">
    Generate Report
  </button>
</div>

                
</div>

                </div>
  </div>






<div class="row mb-5">
    <div class="col-md-4">
      <div class="Acard-counter primary">
        <i class="fa fa-shopping-cart"></i>
        <span class="ANcount-numbers">LKR {total}</span>
        <span class="ANcount-name">Total Amount</span>
      </div>
    </div>

    <div class="col-md-4">
      <div class="Acard-counter danger">
        <i class="fa fa-ticket"></i>
        <span class="Acount-numbers">{orders.length}</span>
        <span class="Acount-name">All Orders</span>
        </div>
    </div>

    <div class="col-md-4">
      <div class="Acard-counter success">
        <i class="fa fa-database"></i>
        <span class="Acount-numbers">{orders.length}</span>
        <span class="Acount-name">Completed Orders</span>
      </div>
    </div>
    </div>

   
<RecentTable tab={orders}/>

<OrderGraph dates={date} amounts={amount}/>
          
</div>
     
    )
}

export default OrderAnalytics;