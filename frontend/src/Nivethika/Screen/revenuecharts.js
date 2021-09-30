import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import Navbar1 from '../SideNavbar/nav1';
import './report.css'





class revenuecharts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      Flower: 0,
      Perfumes: 0,
      watches: 0,
      Cakes: 0,
      dataDoughnut: {
        labels: ["Flower", "Perfumes", "Watches", "Cakes"],
        datasets: [
          {
            data: [0, 0, 0, 0],
            backgroundColor: ["#F7464A", "#46BFBD", "#f803fc", "#fc034e"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#f803fc",
              "#fc034e"
            ]
          }
        ]
      },

      RFlower: 0,
      RPerfumes: 0,
      Rwatches: 0,
      RCakes: 0,
      dataDoughnut1: {
        labels: ["RFlower", "RPerfumes", "RWatches", "RCakes"],
        datasets: [
          {
            data: [0, 0, 0, 0],
            backgroundColor: ["#F7464A", "#46BFBD", "#f803fc", "#fc034e"],
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



  componentDidMount() {

    axios.get(`http://localhost:9999/cartApi/getallflower`)
      .then(response => {
        console.log(response.data.tot)
        this.setState({ Flower: response.data.tot })
        console.log("flower" + this.state.Flower)


        axios.get(`http://localhost:9999/cartApi/getallcakes`)
          .then(response => {
            console.log(response.data.tot)
            this.setState({ Cakes: response.data.tot })
            console.log("cakes" + this.state.Cakes)


            axios.get(`http://localhost:9999/cartApi/getallwatch`)
              .then(response => {
                console.log(response.data.tot)
                this.setState({ watches: response.data.tot })
                console.log("watches" + this.state.watches)


                axios.get(`http://localhost:9999/cartApi/getallperfume`)
                  .then(response => {
                    console.log(response.data.tot)
                    this.setState({ Perfumes: response.data.tot })
                    console.log("perfumes" + this.state.Perfumes)


                    this.setState({
                      dataDoughnut: {

                        labels: ["Flower", "Perfumes", "Cakes", "Watches"],
                        datasets: [
                          {
                            data: [this.state.Flower, this.state.Perfumes, this.state.watches, this.state.Cakes],
                            backgroundColor: ["#F7464A", "#46BFBD", "#fc03f0", "#fc034e"],
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
                  })
              })
          })
      })





    axios.get(`http://localhost:9999/cartApi/Rgetallflower`)
      .then(response => {
        console.log(response.data.totalamount)
        this.setState({ RFlower: response.data.totalamount })
        console.log("Rflower" + this.state.RFlower)


        axios.get(`http://localhost:9999/cartApi/Rgetallcakes`)
          .then(response => {
            console.log(response.data.totalamount)
            this.setState({ RCakes: response.data.totalamount })
            console.log("Rcakes" + this.state.RCakes)


            axios.get(`http://localhost:9999/cartApi/Rgetallwatch`)
              .then(response => {
                console.log(response.data.totalamount)
                this.setState({ Rwatches: response.data.totalamount })
                console.log("Rwatcjes" + this.state.Rwatches)


                axios.get(`http://localhost:9999/cartApi/Rgetallperfume`)
                  .then(response => {
                    console.log(response.data.totalamount)
                    this.setState({ RPerfumes: response.data.totalamount })
                    console.log(this.state.RPerfumes)


                    this.setState({
                      dataDoughnut1: {
                        labels: ["Revenue Source Flower", "Revenue Source Perfumes", "Revenue Source Watches", "Revenue Source Cakes"],
                        datasets: [
                          {
                            data: [this.state.RCakes, this.state.RFlower, this.state.RPerfumes, this.state.Rwatches,],
                            backgroundColor: ["#F7464A", "#46BFBD", "#fc03f0", "#fc034e"],
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

                  })
              })
          })
      })





















  }


  render() {
    return (
      <div>


        <br /><br /><div className="row">

          <div className="col">

            <div align="centrer" class="container-sm w-50">
              <div class="col">
                <div className="card mb-3">
                  <h5>Product Sales</h5>
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
                  <h5 >Revenues</h5>
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

export default revenuecharts;