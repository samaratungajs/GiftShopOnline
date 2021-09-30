import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
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
import { MDBContainer } from "mdbreact";

class eCommercePage extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
state = {
    dataBar: {
        labels: ["Cakes", "Watches", "Flowers", "Perfumes"],
        datasets: [
          {
            label: "% of Items",
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
      suppliers:[],
      firstName:''
  
}

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/allsuppliers')
  .then(response => {
    this.setState({suppliers : response.data.data })
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

onChange(e){
  this.setState({ [e.target.name]: e.target.value });
  axios.get(`http://localhost:9999/productmanager/searchsupp/${this.state.firstName}`)   
  .then(response => {
    this.setState({suppliers : response.data.data })
  })

}
handleChange =(files)=>{
  this.setState({
    files:files
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
            <div className="col mb-5">
              <TopNav/>
            <div className="m-5 mt-4">
            <h3 align="center" className="h3" >Supplier Statistics</h3>
                <div className="row">
                <div className="col-6 ">

        <div class="card-deck p-2" align="center">
        <div class="card border-primary mb-3 w-15">
        <div class="card-header text-white bg-primary ">Total Registered Suppliers</div>
        <div class="card-body">
            <h4 class="card-text text-secondary">05 local suppliers</h4>
        </div>
        </div>
       
        </div>

        <div class="card-deck p-3" align="center">
        <div className="row ">
        <div className="col-6">
                <div class="card border-primary ml-3  mb-3 w-15">
                <div class="card-header text-white bg-primary">Total Products from Suppliers</div>
                <div class="card-body">
                    <h4 class="card-text  text-secondary">05 items</h4>
                </div>
                </div></div><div className="col-6">
                <div class="card text-white border-primary ml-3 mb-3 w-15">
                <div class="card-header text-white bg-primary">Supplier Products to be Approved</div>
                <div class="card-body">
                    <h4 class="card-text  text-secondary">04 items</h4>
                </div>
                </div> </div>
                </div>
        </div>

        <div class="card-deck p-2" align="center">
                <div class="card text-white border-primary mb-3 w-15">
                <div class="card-header text-white bg-primary ">Gift Items From Local Suppliers</div>
                <div class="card-body">
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                </div>
                </div>
              
        </div>
        </div>

                <div className="col-6">
                 <MDBRow className="my-2" center>
                    <ReactNotification/>
                    <MDBCard className="w-100 border-primary " style={pStyle}>
                    <div align="center" >
                        <div class="input-group mb-1 w-50 mt-3" >
                        <input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="Search Suppliers" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                        <button type="button" class="btn btn-primary" onClick={this.onChange}>
                            <i class="fas fa-search"></i>
                        </button>
                        </div>
                    </div>
                    </div>
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
                        {this.state.suppliers.length > 0 && this.state.suppliers.map((supplier, index) => (
                        <tr key={index}> 
                        <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>{supplier.firstName} {supplier.lastName}</strong></h5><p className="text-muted">{supplier.email}</p></td>
                        <td className="pt-4">{supplier.address}</td>
                        <td className="pt-4">0{supplier.pNumber}</td>
                        </tr>
                        ))}
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
    );
  }
}

export default eCommercePage;