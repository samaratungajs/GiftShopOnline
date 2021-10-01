import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./ctegorySidebar.css"
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import { useState } from 'react';
import {useLocation} from 'react-router-dom'

export default function CatSidebar() {
         const [cake, setcake] = useState("");
         const [watches, setwatches] = useState("");
         const [perfumes, setperfumes] = useState("");
         const [flowers, setflowers] = useState("");
         const [all, setall] = useState("");
         const {search} = useLocation();

        useEffect(() => {
           if(search==="?cat=flowers"){
               setflowers("rgba(46, 153, 161, 0.808)")
               setall("")
               setwatches("")
               setperfumes("")
               setcake("")
           }

           else if(search==="?cat=cakes"){
            setcake("rgba(46, 153, 161, 0.808)")
            setall("")
            setwatches("")
            setperfumes("")
            setflowers("")
        }

        else if(search==="?cat=watches"){
            setwatches("rgba(46, 153, 161, 0.808)")
            setall("")
            setflowers("")
            setperfumes("")
            setcake("")
        }

        else if(search==="?cat=perfume"){
            setperfumes("rgba(46, 153, 161, 0.808)")
            setall("")
            setwatches("")
            setflowers("")
            setcake("")
        }

        else{
            setall("rgba(46, 153, 161, 0.808)")
            setflowers("")
            setwatches("")
            setperfumes("")
            setcake("")
        }
            
        }, [search])


     
        return (
            <div className="row">
            <div className="card py-2 mt-4">

        <h5 class="font-weight-bold">Categories</h5>
                    <ul class="list-group">
                    <Link to={"/abuyer/search"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:all}}> All <span class="badge AQuantityCat badge-pill">8</span> </li></Link>
                    <Link to={"/abuyer/search/?cat=cakes"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:cake}}> Cakes <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/search/?cat=watches"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:watches}}> Watches <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/search/?cat=perfume"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:perfumes}}> Perfumes <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    <Link to={"/abuyer/search/?cat=flowers"} style={{textDecoration:"none"}}><li class="list-group-item AlistItem AlistItemAction d-flex justify-content-between align-items-center AcatCard" style={{backgroundColor:flowers}}> Flowers <span class="badge AQuantityCat badge-pill">2</span> </li></Link>
                    </ul>
                <div className="container-fluid p-0">
                <h5 class="font-weight-bold mt-2">Brands</h5>
                <div className="d-flex justify-content-around"><div><img src={img1} alt="" style={{maxWidth:"18vh"}}/></div><div><img src={img2} alt="" style={{maxWidth:"18vh"}}/></div></div>
                <div className="d-flex justify-content-around"><div><img src={img4} alt="" style={{maxWidth:"18vh"}}/></div><div><img src={img3} alt="" style={{maxWidth:"18vh"}}/></div></div>
                <div className="d-flex justify-content-around"><div><img src={img5} alt="" style={{maxWidth:"18vh"}}/></div><div><img src={img6} alt="" style={{maxWidth:"18vh"}}/></div></div>
                
                </div>

        </div>

        </div>
                  

            
        )
    }

