import React, { Component } from 'react'
import img1 from './images/ChristmasBanner.jpg'

export default class MidBanner extends Component {
    render() {
        return (
            <div>
               <img className="img-fluid my-5" src={img1} style={{height:"300px", width:"180rem"}}></img> 
            </div>
        )
    }
}
