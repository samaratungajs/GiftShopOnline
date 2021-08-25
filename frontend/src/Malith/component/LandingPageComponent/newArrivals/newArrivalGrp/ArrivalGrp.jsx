import React, { Component } from 'react'
import {Container,Row} from 'react-bootstrap'
import './arrivalGrp.css'
import ArrivalCard from '../newArrivalCard/ArrivalCard'

export default class ArrivalGrp extends Component {
    render() {
        return (
   
                 <div className="AarrivalGrp">
                
                <h3 className="AcatGrpText">New Arrivals <i className="fas fa-rocket AarrivalIcon" style={{fontSize:"30px"}}></i></h3>
            <Container className="card p-4 px-5">
            
      <Row>
        <ArrivalCard/>
        <ArrivalCard/>
        <ArrivalCard/>
        <ArrivalCard/>
        <ArrivalCard/>
        <ArrivalCard/>
      </Row>
    </Container>
    </div>
          
        )
    }
}
