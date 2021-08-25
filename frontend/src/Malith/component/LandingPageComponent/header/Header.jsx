import React from 'react'
import img3 from './images/ChristmasBanner.jpg'
import img2 from './images/FlowerBanner.jpg'
import img1 from './images/PerfumeBanner.jpg'
import img4 from './images/CakeBanner.jpg'

import Carousel from 'react-bootstrap/Carousel'

export default function Header() {
    return (
      <div>
        <Carousel fade="true" interval="2000">
          <Carousel.Item>
          <img src={img1} className="d-block w-100" alt="Responsive image py-0" style={{height:"70vh"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={img2} className="d-block w-100" alt="Responsive image py-0" style={{height:"70vh"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={img3} className="d-block w-100" alt="Responsive image py-0" style={{height:"70vh"}}/>
          </Carousel.Item>


        <Carousel.Item>
          <img src={img4} className="d-block w-100" alt="Responsive image py-0" style={{height:"70vh"}}/>
          </Carousel.Item>
        </Carousel>
        

      </div>
    )
}
