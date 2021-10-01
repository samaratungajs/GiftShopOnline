import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyOrderCard() {
    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     const fetchOrders= async ()=>{
    //         const res = await axios.get("/myorders/getallorders");
    //         setOrders(res.data.data);
    //     }
    //     fetchOrders();
    // }, [])


    return (
        <div className="container">
        {/* {orders.map((od)=>(
            <div className="card"><h1>{od.amount}</h1>
            {od.orderitems.map((it)=>(
                <><h3>{it.productName}</h3><h2>{it.wholesalePrice}</h2></>
            ))}
            </div>
        ))} */}
        
            
        </div>
    )
}
