import React, { Component } from 'react'
import {Container,Row} from 'react-bootstrap'
import './arrivalGrp.css'
import ArrivalCard from '../newArrivalCard/ArrivalCard'

export default function ArrivalGrp({alist}) {
        return (
   
                 <div className="AarrivalGrp">
                
                <h3 className="AcatGrpText">New Arrivals <i className="fas fa-rocket AarrivalIcon" style={{fontSize:"30px"}}></i></h3>
            <Container className="card p-4 px-5" style={{backgroundColor:"#f5f5f5"}}>
            
      <Row>
       {alist.map((a)=>(
         <ArrivalCard proc={a}/>
       ))}
      </Row>
    </Container>
    </div>
          
        )
    }

