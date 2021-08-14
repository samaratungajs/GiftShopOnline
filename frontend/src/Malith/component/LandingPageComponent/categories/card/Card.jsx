import React from 'react'
import './card.css'
import {Col,Image} from 'react-bootstrap'
import img3 from './images/watchcat.jpg'

export default function Card() {
    return (
      <Col xs={6} md={3}><center>
      <a className="AcatCard"><Image src={img3} roundedCircle style={{maxWidth:"10rem"}} className="AcatImgEffect" /></a>
      <h4 className="mt-2">Cakes</h4></center>
    </Col>

    )
}
