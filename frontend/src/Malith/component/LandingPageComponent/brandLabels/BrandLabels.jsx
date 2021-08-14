import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import './brandlogo.css'

export default class BrandLabels extends Component {
    render() {
        return (
            <div className="container-fluid AbrandGrp">
                
            
      <Row>

      <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img1} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img2} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img3} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img4} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img5} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 <Col xs={6} md={2}>
            <div className="AbrandEffect">
                <div style={{border:"none"}}>
                    <div className="card-img-actions"> <img src={img6} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
               
            </div>           
 </Col>

 
        
      </Row>
    </div>
        )
    }
}
