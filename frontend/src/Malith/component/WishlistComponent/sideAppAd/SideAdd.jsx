import React, { Component } from 'react'
import imgqr from "./images/Pic_Cover.png"
import './sideAdd.css'
import img1 from '../../SearchPageComponent/ctegorySidebar/images/1.png'
import img2 from '../../SearchPageComponent/ctegorySidebar/images/2.png'
import img3 from '../../SearchPageComponent/ctegorySidebar/images/3.png'
import img4 from '../../SearchPageComponent/ctegorySidebar/images/4.png'
import img5 from '../../SearchPageComponent/ctegorySidebar/images/5.png'
import img6 from '../../SearchPageComponent/ctegorySidebar/images/6.png'

export default class SideAdd extends Component {
    render() {
        return (
            <div className="card  ASideAd mx-0" style={{backgroundColor:"white", marginTop:"33px", width:"110%"}}>
            <h5 className="text-center pt-3 px-3"><b>Giftery Mobile App</b></h5>  
            <p className="text-center px-4">Search Anywhere Anytime!</p>
            <img src={imgqr} alt="ad image" />

            <div className="container-fluid p-3">
                <h5 class="font-weight-bold mt-2">Brands</h5>
                <div className="d-flex justify-content-around"><div><img src={img1} className="px-2" alt="" style={{maxWidth:"18vh"}}/></div><div><img src={img2} className="px-2" alt="" style={{maxWidth:"18vh"}}/></div></div>
                <div className="d-flex justify-content-around"><div><img src={img4} alt="" className="px-2" style={{maxWidth:"18vh"}}/></div><div><img src={img3} alt="" className="px-2" style={{maxWidth:"18vh"}}/></div></div>
                <div className="d-flex justify-content-around"><div><img src={img5} alt="" className="px-2" style={{maxWidth:"18vh"}}/></div><div><img src={img6} alt="" className="px-2" style={{maxWidth:"18vh"}}/></div></div>
                
                </div>
            </div>



        )
    }
}
