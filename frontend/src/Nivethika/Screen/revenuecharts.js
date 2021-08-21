import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import Navbar1 from '../SideNavbar/nav1';





class revenuecharts extends Component{
 

        constructor(props){
            super(props);
            this.state = {
              Flower: 20,
              Perfumes: 40,
              watches: 30,
              Cakes:10,
                dataDoughnut: {
                    labels: ["Flower", "Perfumes", "Watches","Cakes"],
                    datasets: [
                        {
                            data: [20,40,30,10],
                            backgroundColor: ["#F7464A", "#46BFBD","#f803fc","#fc034e"],
                            hoverBackgroundColor: [
                              "#FF5A5E",
                              "#5AD3D1",
                              "#f803fc",
                              "#fc034e"
                            ]
                        }
                    ]
              },
                
              RFlower: 30000,
              RPerfumes: 20000,
              Rwatches: 10658,
              RCakes: 20956,
              dataDoughnut1: {
                labels: ["RFlower", "RPerfumes", "RWatches","RCakes"],
                datasets: [
                    {
                        data: [30000,20000,10658,20956],
                        backgroundColor: ["#F7464A", "#46BFBD","#f803fc","#fc034e"],
                        hoverBackgroundColor: [
                            "#FF5A5E",
                          "#5AD3D1",
                          "#f803fc",
                          "#fc034e"
          
                        ]
                    }
                ]
          }
                
            }
        
        
    }


    
componentDidMount(){
   
        this.setState({dataDoughnut : {
          labels: ["Flower", "Perfumes", "Watches","Cakes"],
          datasets: [
            {
              data: [this.state.Flower,this.state.Perfumes,this.state.watches,this.state.Cakes ],
              backgroundColor: ["#F7464A", "#46BFBD","#fc03f0","#fc034e"],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#fc03f0",
                "#fc034e"
              ]
            }
          ]
        }
        })
  
        this.setState({dataDoughnut1 : {
          labels: ["Revenue Source Flower", "Revenue Source Perfumes", "Revenue Source Watches","Revenue Source Cakes"],
          datasets: [
            {
              data: [this.state.RFlower,this.state.RPerfumes,this.state.Rwatches,this.state.RCakes ],
              backgroundColor: ["#F7464A", "#46BFBD","#fc03f0","#fc034e"],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#fc03f0",
                "#fc034e"
              ]
            }
          ]
        }})
        
  
    
   
  
  }
     

    render() {
        return (
            <div>
 

 <br/><br/><div className="row">
     
      <div className="col">

        <div align="centrer" class="container-sm w-50">
        <div class="col">        
            <div className="card mb-3">
            <h5 class="card-title center " align="center">Product Sales</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        
      </div>
      </div>
     
</div>
            
     
<div className="row">
     <div className="col">

       <div align="centrer" class="container-sm w-50">
       <div class="col">        
           <div className="card mb-3">
           <h5 class="card-title center " align="center">Revenues</h5>
         <Doughnut data={this.state.dataDoughnut1} options={{ responsive: true }} />
         </div>
       </div>
       
     </div>
     </div>
     </div>

     </div>

  
    
              
                
        )
    }



}

export default revenuecharts ;