import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBCardHeader } from "mdbreact";
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import Nav from "../components/Navbar"
import TopNav from "../components/topNav";
import { Bar } from "react-chartjs-2";



class eCommercePage extends Component {
state = {
    dataBar: {
        labels: ["Cakes", "Watches", "Flowers", "Perfumes"],
        datasets: [
          {
            label: "% of Votes",
            data: [1, 1, 3, 1,],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(170, 128, 252,0.4)",
              "rgba(255, 177, 101,0.4)"
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(98,  182, 239, 1)",
              "rgba(255, 218, 128, 1)",
              "rgba(170, 128, 252, 1)",
              "rgba(255, 177, 101, 1)"
            ]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      usersdataBar: {
        labels: ["Buyers", "Sellers", "Administrators", "Product Managers","Accountants"],
        datasets: [
          {
            label: "% of Users",
            data: [4, 5, 1, 1, 1],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(170, 128, 252,0.4)",
              "rgba(255, 177, 101,0.4)"
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(98,  182, 239, 1)",
              "rgba(255, 218, 128, 1)",
              "rgba(170, 128, 252, 1)",
              "rgba(255, 177, 101, 1)"
            ]
          }
        ]
      },
      usersbarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
  
  
}

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/getall')
  .then(response => {

  })
}

handleDeleteItem = (item) => {
  axios.delete(`http://localhost:9999/productmanager/delete/${item._id}`)   
  .then(response=>{
    store.addNotification({
      title: "Gift Item",
      message: "Removed",
      type:"warning",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadein"],
      animationOut: ["animated", "fadeout"],
      
      dismiss: {
        duration: 2000,
        showIcon:true
      },
      width: 600,
     
    })
      this.componentDidMount();
  }).catch(error=>{
      console.log(error.message);
      alert(error.message);
  })
}



render() {
  const pStyle = {
     height:'510px',
  overflow: 'scroll'
  };
  
    return (

        <div className="row bg-secondary bg-opacity-10">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-1">
              <TopNav/>
            <div className="m-5 mt-4">
            <h3 align="center" className="h3" >Product Manager Dashboard</h3>
               

        <div class="card-deck p-3" align="center">
        <div className="row ">
        <div className="col">
                <div class="card border-primary border-2 ml-3  mb-3 w-15">
                {/* <div class="card-header text-white bg-primary">Total Products from Suppliers</div> */}
                <div class="card-body">        
               <i class="fas fa-user-circle fa-2x"></i>
               <span class="card-text  text-secondary"><h5>Registered Customers</h5>  <h5>150</h5> </span>

                </div>
                </div></div><div className="col">
                <div class="card border-primary border-2 ml-3 mb-3 w-15">
                <div class="card-body">
                    <i class="fas fa-users fa-2x"></i>
                    <span class="card-text  text-secondary"><h5>Registered Suppliers</h5>  <h5>25</h5> </span>

                </div>
                </div> </div>
                <div className="col">
                <div class="card border-primary border-2 ml-3 mb-3 w-15">
                <div class="card-body">
                    <i class="fas fa-gifts fa-2x"></i>
                    <span class="card-text  text-secondary"><h5>Placed Orders</h5>  <h5>05</h5> </span>
                </div>
                </div> </div>
                <div className="col">
                <div class="card border-primary border-2 ml-3 mb-3 w-15">
                <div class="card-body">
                <i class="fas fa-file-invoice-dollar fa-2x"></i>
                <span class="card-text  text-secondary"><h5>Average Income</h5>  <h5>67200 LKR</h5> </span>
                </div>
                </div> </div>
                </div>
        </div>

        <div class="card-deck p-1" align="center">
                
                <div className="row">
                <div className="col-6">
                <div class="card text-secondary mb-3 w-15">
                <h5 className="mt-2">Giftery Application Users</h5>
                <div class="card-body">
                <Bar data={this.state.usersdataBar} options={this.state.usersbarChartOptions} />
                </div>
                </div>
                </div>
                <div className="col-6">
                <div class="card text-secondary mb-3 w-15">
                <h5 className="mt-2">Gift Items From Local Suppliers</h5>
                <div class="card-body">
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                </div>
                </div>
                </div>
                </div>
       
                <div className="row">
                <div className="col-6">
                 <MDBRow className="my-2 p-2" center>
                 <MDBCardHeader className="bg-primary"><h5 className="text-white">Recent Products</h5></MDBCardHeader>
                    <MDBCard className="w-100 border-primary " style={pStyle}>
                    <MDBCardBody>
                    <MDBTable className="product-table">
                    {/* columns={columns}  */}
                        <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
                        <tr>
                        {/* <th>Product</th>
                        <th>Category</th>
                        <th>Wholesale Price</th>
                        <th>Discount</th>
                        <th>Quantity</th>
                        <th>Price per Item</th>
                        <th>Supplier</th> */}
                        </tr>
                        </MDBTableHead>
                        {/* rows={rows} */}
                        <MDBTableBody >

                        <tr> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
                        <td className="pt-4">Flowers</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>
                        <tr> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
                        <td className="pt-4">Flowers</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>
                        <tr> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
                        <td className="pt-4">Flowers</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>
                        <tr> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
                        <td className="pt-4">Flowers</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>
                        <tr> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
                        <td className="pt-4">Flowers</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>

                    </MDBTableBody >
                </MDBTable>
                </MDBCardBody>
            </MDBCard>
            </MDBRow>
            </div>

            <div className="col-6">
                 <MDBRow className="my-2 p-2" center>
                 <MDBCardHeader className="bg-primary"><h5 className="text-white">Latest Orders</h5></MDBCardHeader>
                    <MDBCard className=" border-primary " style={pStyle}>
                    
                    <MDBCardBody>
                    <MDBTable className="product-table">
                    {/* columns={columns}  */}
                        <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
                        <tr>
                        <th>Customer</th>
                        <th>Items Quantity</th>
                        <th>Total Price</th>
                        </tr>
                        </MDBTableHead>
                        {/* rows={rows} */}
                        <MDBTableBody >

                        <tr> 
                        <td className="pt-4"><strong>shavineeswar@gmail.com</strong></td>
                        <td className="pt-4" align="center">5</td>
                        <td className="pt-4">45000 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>bimaljk@gmail.com</strong></td>
                        <td className="pt-4" align="center">3</td>
                        <td className="pt-4">14500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>nivisha98@gmail.com</strong></td>
                        <td className="pt-4" align="center">3</td>
                        <td className="pt-4">9500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>zarafeek9@gmail.com</strong></td>
                        <td className="pt-4" align="center">8</td>
                        <td className="pt-4">100500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>pubudu97@gmail.com</strong></td>
                        <td className="pt-4" align="center">2</td>
                        <td className="pt-4">6500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>jazminzik3@gmail.com</strong></td>
                        <td className="pt-4" align="center">1</td>
                        <td className="pt-4">4500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>mikehe3@gmail.com</strong></td>
                        <td className="pt-4" align="center">5</td>
                        <td className="pt-4">14500 LKR</td>
                        </tr>
                        <tr> 
                        <td className="pt-4"><strong>lmk8dissanayake@gmail.com</strong></td>
                        <td className="pt-4" align="center">3</td>
                        <td className="pt-4">41500 LKR</td>
                        </tr>

                    </MDBTableBody >
                </MDBTable>
                </MDBCardBody>
            </MDBCard>
            </MDBRow>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
    );
  }
}

export default eCommercePage;