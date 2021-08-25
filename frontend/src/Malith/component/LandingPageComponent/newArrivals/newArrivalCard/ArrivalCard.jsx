import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ArrivalCard extends Component {
    render() {
        return (
   
                <Col xs={6} md={2}>
            <div className="card AcardHover">
                <div className="card-body" style={{border:"none"}}>
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                </div>
                <div className="card-body bg-light text-center">
                   <span className="AcardPrice"><h5 className="mb-0 font-weight-semibold">LKR 250.99</h5></span>
                </div>
            </div>
   
                
 </Col>
  
        )
    }
}
