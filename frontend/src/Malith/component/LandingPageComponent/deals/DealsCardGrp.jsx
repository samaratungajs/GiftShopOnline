import React, { Component } from 'react'
import DealCard from './DealCard'
import {Container,Row} from 'react-bootstrap'

export default class DealsCardGrp extends Component {
    render() {
        return (
            <div className="AcatGrp">
                
            <h3 className="AcatGrpText">Daily <span className="AfireIcon">Hot</span> Deals <i className="fas fa-fire AfireIcon" style={{fontSize:"40px"}}></i></h3>
        <Container>
        
  <Row>
    <DealCard/>
    <DealCard/>
    <DealCard/>
    <DealCard/>
    <DealCard/>
    <DealCard/>
  </Row>
</Container>
</div>
        )
    }
}
