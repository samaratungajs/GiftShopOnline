import React from 'react'
import "./CategoryGrp.css"
import '../card/card.css'
import {Container,Row,Col,Image} from 'react-bootstrap'
import img1 from './images/cakeCat.jpg'
import img2 from './images/perfumeCat.jpg'
import img3 from './images/flowerCat.jpg'
import img4 from './images/watchcat.jpg'

export default function CategoryCard() {
    return (
        <div className="AcatGrp">
            <h3 className="AcatGrpText">Featured Categories</h3>
        <Container className="card p-3" style={{borderColor:"green", backgroundColor:"#f7f7f7"}}>
  <Row>
  <Col xs={6} md={3}><center>
      <a href="/abuyer/search/?cat=cakes" className="AcatCard"><Image src={img1} roundedCircle style={{maxWidth:"10rem"}} className="AcatImgEffect" /></a>
      <h4 className="mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>Cakes</h4></center>
    </Col>

    <Col xs={6} md={3}><center>
      <a href="/abuyer/search/?cat=flowers" className="AcatCard"><Image src={img3} roundedCircle style={{maxWidth:"10rem"}} className="AcatImgEffect" /></a>
      <h4 className="mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>Flowers</h4></center>
    </Col>

    <Col xs={6} md={3}><center>
      <a href="/abuyer/search/?cat=perfume" className="AcatCard"><Image src={img2} roundedCircle style={{maxWidth:"10rem"}} className="AcatPerfumeImgEffect" /></a>
      <h4 className="mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>Perfumes</h4></center>
    </Col>

    <Col xs={6} md={3}><center>
      <a href="/abuyer/search/?cat=watches" className="AcatCard" style={{fontFamily:"'Poppins', sans-serif"}}><Image src={img4} roundedCircle style={{maxWidth:"10rem"}} className="AcatImgEffect" /></a>
      <h4 className="mt-2" style={{fontFamily:"'Poppins', sans-serif"}}>Watches</h4></center>
    </Col>

  </Row>
</Container>
</div>
    )
}
