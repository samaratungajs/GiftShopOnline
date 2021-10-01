import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './DealsCard.css'
import {Link} from "react-router-dom"
export default function DealCard ({proc}) {

        return (
                <Col xs={6} md={2} >
            <div className="card AcardHover">
              <div className="card-body">
                  <div className="card-img-actions"> <img src={proc.imageURL} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
              </div>
              <div className="card-body bg-light text-center" style={{maxHeight:"70rem"}}>
                  <div className="mb-2 AproductCardHeader">
                      <h6 className="font-weight-semibold mb-2"> <Link to={`/product/${proc._id}`} className="text-default mb-2" data-abc="true">{proc.productName}</Link> </h6>
                  </div>
                  <h4 className="mb-0 font-weight-bold" style={{color:"black"}}>LKR {proc.wholesalePrice}</h4><span className="Astrike-text">LKR {proc.pricePItem}</span> 
              </div>
          </div>

   
                
 </Col>
        )
    }

