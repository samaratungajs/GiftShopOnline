import React from 'react'
import Card from '../card/Card'
import "./CategoryGrp.css"
import {Container,Row} from 'react-bootstrap'

export default function CategoryCard() {
    return (
        <div className="AcatGrp">
            <h3 className="AcatGrpText">Featured Categories</h3>
        <Container className="card p-3" style={{borderColor:"green", backgroundColor:"#f7f7f7"}}>
  <Row>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </Row>
</Container>
</div>
    )
}
