import React, { Component } from 'react'
import img3 from './images/parallax.jpg'
import img2 from './images/2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './custReview.css'

export default class CustReview extends Component {
    render() {
        return (
            <div className="mt-5">
        <Carousel fade="true" interval="2000">
          <Carousel.Item>
              <div className="container-fluid p-0">
          <img src={img2} className="d-block w-100" alt="Responsive image py-0" style={{height:"50vh"}}/>
          <div class="carousel-caption centered"><h3>What our client say?</h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, labore? Possimus impedit itaque repellendus similique dolorem labore a eos asperiores fuga, ratione reiciendis nostrum perspiciatis repellat nulla est minima quasi velit sit doloribus soluta magni vel accusamus saepe ad? Quaerat doloremque eaque magnam explicabo quidem at culpa maiores reiciendis? Facilis unde cum minima eaque sequi illo. Minus deleniti a sint voluptatum magni. Itaque quas tempora ipsam, est excepturi nobis, deserunt iure voluptatibus reiciendis earum, molestias eveniet impedit! Qui, blanditiis facilis.</div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
          <img src={img3} className="d-block w-100" alt="Responsive image py-0" style={{height:"50vh"}}/>
          <div class="carousel-caption centered"><h3>What our client say?</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus nemo tempore illum optio perspiciatis, beatae ipsa at rem vitae qui eveniet sequi harum veniam dignissimos. Culpa odit earum dolores aliquam veniam nostrum, recusandae, id adipisci eius veritatis praesentium provident illum. Veniam, non inventore magnam mollitia atque dicta hic. Saepe veniam dolore beatae qui impedit eos consequatur id voluptatibus deserunt quis provident, amet sequi, inventore, nihil non quod. Quibusdam, quae.</div>
          </Carousel.Item>

  </Carousel>
  </div>      

  
        )
    }
}
