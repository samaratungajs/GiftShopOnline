import React from 'react'
import {useLocation} from 'react-router-dom'
import CompletedOrder from '../myOrderCard/CompletedOrders';
import DeletedOrder from '../myOrderCard/DeletedOrder';
import MyOrderCard from '../myOrderCard/MyOrderCard';
import LineChart from '../../lineChart/LineChart';


export default function Test() {
    const {search} = useLocation();

    if(search==="?cat=comorder"){          
        return( <><CompletedOrder/><CompletedOrder/><CompletedOrder/><CompletedOrder/></>)
         }

    else if(search==="?cat=delorder"){
        return( <><DeletedOrder/><DeletedOrder/><DeletedOrder/><DeletedOrder/><DeletedOrder/></>)
        }

    else if(search==="?cat=penorder"){
        return( <><MyOrderCard/><MyOrderCard/><MyOrderCard/><MyOrderCard/><MyOrderCard/></>)
        } 

    else if(search==="?cat=ordanalytic"){
        return( <><LineChart/></>)
       }   
        
    else{return(<>
    <MyOrderCard/>
    <CompletedOrder/>
    <MyOrderCard/>
    <CompletedOrder/>
    <MyOrderCard/>
    <CompletedOrder/>
    </>
    )}    

}
