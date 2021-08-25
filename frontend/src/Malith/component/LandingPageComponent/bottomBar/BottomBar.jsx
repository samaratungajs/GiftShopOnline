import React, { Component } from 'react'
import './bottombar.css'
export default class BottomBar extends Component {
    render() {
        return (
            <div className="container-fluid AbottomBar">
                <div className="row">
                    <div className="col-sm-4 AbottomItem">

                    <span class="d-inline-block"><i class="fas fa-truck AbottomIcon" style={{fontSize:"4rem", marginLeft:"30px"}}></i></span>
      <span class="d-inline-block btn float-right">
      <p className="AbottumText">Fast Delivery</p>
      </span> 
                        </div>

                        <div className="col-sm-4 AbottomItem">

<span class="d-inline-block"><i class="fas fa-hand-holding-usd AbottomIcon" style={{fontSize:"4rem"}}></i></span>
<span class="d-inline-block btn float-right">
<p className="AbottumText">Money Guarantee</p>
</span> 
    </div>

    <div className="col-sm-4 AbottomItem">

                    <span class="d-inline-block"><i class="fas fa-headset AbottomIcon" style={{fontSize:"4rem"}}></i></span>
      <span class="d-inline-block btn float-right">
      <p className="AbottumText">Online Support</p>
      </span> 
                        </div>

                       </div>
             
                    </div>
                    

                

        )
    }
}
