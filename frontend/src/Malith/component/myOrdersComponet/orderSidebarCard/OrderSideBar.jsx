import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import {useLocation} from 'react-router-dom'

export default function OrderSideBar() {
    const [comOrder, setcomOrder] = useState("");
         const [penOrder, setpenOrder] = useState("");
         const [delOrder, setdelOrder] = useState("");
         const [ordAnalytic, setordAnalytic] = useState("");
         const [all, setall] = useState("");
         const {search} = useLocation();

        useEffect(() => {
           if(search==="?cat=ordanalytic"){
               setordAnalytic("rgba(46, 153, 161, 0.808)")
               setall("")
               setpenOrder("")
               setdelOrder("")
               setcomOrder("")
           }

           else if(search==="?cat=comorder"){
            setcomOrder("rgba(46, 153, 161, 0.808)")
            setall("")
            setpenOrder("")
            setdelOrder("")
            setordAnalytic("")
        }

        else if(search==="?cat=penorder"){
            setpenOrder("rgba(46, 153, 161, 0.808)")
            setall("")
            setordAnalytic("")
            setdelOrder("")
            setcomOrder("")
        }

        else if(search==="?cat=delorder"){
            setdelOrder("rgba(46, 153, 161, 0.808)")
            setall("")
            setpenOrder("")
            setordAnalytic("")
            setcomOrder("")
        }

        else{
            setall("rgba(46, 153, 161, 0.808)")
            setordAnalytic("")
            setpenOrder("")
            setdelOrder("")
            setcomOrder("")
        }
            
        }, [search])


     
        return (
            <div className="row">
            <div className="card py-2 mt-4 mx-2">

        <h5 class="font-weight-bold">My Orders</h5>
                    <ul class="list-group">
                    <Link to={"/abuyer/myorders"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:all}}> All Orders <span class="badge AQuantityCat badge-pill">8</span> </li></Link>
                    <Link to={"/abuyer/myorders/?cat=comorder"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:comOrder}}> Completed Orders <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/myorders/?cat=penorder"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:penOrder}}> Pending Clearenece <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/myorders/?cat=delorder"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:delOrder}}> Deleted Orders  <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/myorders/?cat=ordanalytic"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:ordAnalytic}}> Order Analytics </li></Link>
                    </ul>
                

        </div>

        </div>
                  

            
        )
    }

