import React, { Component } from 'react'
import './bottombar.css'
export default class BottomBar extends Component {
    render() {
        return (

               <div class="d-flex justify-content-sm-around  AbottomBar">
                    <div className="text-center">

                    <span class="d-inline-block"><i class="fas fa-truck AbottomIcon" style={{fontSize:"4rem"}}></i></span>
      <span >
      <p className="AbottumText">Fast Delivery</p>
      </span> 
                        </div>

                        <div className="text-center">

<span class="d-inline-block"><i class="fas fa-hand-holding-usd AbottomIcon" style={{fontSize:"4rem"}}></i></span>
<span>
<p className="AbottumText">Money Guarantee</p>
</span> 
    </div>

    <div className="text-center">

                    <span class="d-inline-block"><i class="fas fa-headset AbottomIcon" style={{fontSize:"4rem"}}></i></span>
      <span>
      <p className="AbottumText">Online Support</p>
      </span> 
                        </div>

                       </div>
             
        
                    

                

        )
    }
}
