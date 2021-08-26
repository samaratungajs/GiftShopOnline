import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../SideNavbar/Navbar';
import '../../../App.css'
import './new.css'
import Header from '../SupplierItem/header'



class getUserbyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            User: []
        }

    }





    componentDidMount() {
        axios.get(`http://localhost:9999/supplier/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ User: response.data.data });
                console.log(this.state.User);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div>
                <Header/>
            <div class='some-page-wrapper'>
                <div class='row'>


                    <div class='column'>
                        <div class='blue-column'>
                            <Navbar />
                        </div>
                    </div>

                <div class='double-column'>
                    <div class='green-column'>
                        <div className="container"><br />



                            {this.state.User.length > 0 && this.state.User.map((item, index) => (
                                <div key={index}  >
                                <div class="page-content page-container" id="page-content">
                                    <div class="padding">
                                        <div class="row container d-flex justify-content-center">
                                            <div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                                                    <h6 class="f-w-600">{item.firstName} {item.lastName}</h6>
                                                                    <p>Supplier</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-8">
                                                                <div class="card-block">
                                                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                                    <div class="row">
                                                                        <div class="col-sm-6">
                                                                            <p class="m-b-10 f-w-600">Email</p>
                                                                            <h6 class="text-muted f-w-400">{item.email}</h6>
                                                                        </div>
                                                                        <div class="col-sm-6">
                                                                            <p class="m-b-10 f-w-600">Phone</p>
                                                                            <h6 class="text-muted f-w-400">{item.pNumber}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Address and NIC</h6>
                                                                    <div class="row">
                                                                        <div class="col-sm-6">
                                                                            <p class="m-b-10 f-w-600">Address</p>
                                                                            <h6 class="text-muted f-w-400">{item.address}</h6>
                                                                        </div>
                                                                        <div class="col-sm-6">
                                                                            <p class="m-b-10 f-w-600">NIC</p>
                                                                            <h6 class="text-muted f-w-400">{item.NIC}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div >
                                                                        <button class="btn btn-outline-dark btn-sm">Edit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            ))}


                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                        

                )

    }
}






                export default getUserbyEmail;