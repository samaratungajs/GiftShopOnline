import React, { Component } from 'react'
import imgqr from "./images/Pic_Cover.png"
import './sideAdd.css'

export default class SideAdd extends Component {
    render() {
        return (
            <div className=" card  ASideAd" style={{backgroundColor:"white", marginTop:"33px"}}>
            <h5 className="text-center pt-3 px-3"><b>Giftery Mobile App</b></h5>  
            <p className="text-center px-4">Search Anywhere Anytime!</p>
            <img src={imgqr} alt="ad image" />
            </div>



        )
    }
}
