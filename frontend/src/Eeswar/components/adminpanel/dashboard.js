import React, { Component } from 'react';
import axios from 'axios';
import TopNav from './topNav'
import AdminSideNav from "./adminpanelNavigationbar"


class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            totalUser: 0,
            totalBuyer: 0,
            totalSupplier: 0,
            totalUnapprove: 0,

        }
    }

    componentDidMount() {
        axios.get('http://localhost:9999/admin/totaluser')
            .then(response => {
                this.setState({ totalUser: response.data.data })
                console.log(response.data);
            })
        axios.get('http://localhost:9999/admin/totalbuyer')
            .then(response => {
                this.setState({ totalBuyer: response.data.data })
                console.log(response.data);
            })
        axios.get('http://localhost:9999/admin/totalsupplier')
            .then(response => {
                this.setState({ totalSupplier: response.data.data })
                console.log(response.data);
            })
        axios.get('http://localhost:9999/admin/totalunapproveditems')
            .then(response => {
                this.setState({ totalUnapprove: response.data.data })
                console.log(response.data);
            })
        // axios.get('http://localhost:9996/administrator/rcategorytot/not approved')
        // .then(response => {
        //     this.setState({UnapprovedRe : response.data.tot })
        // })
        // axios.get('http://localhost:9996/administrator/gettot')
        // .then(response => {
        //     this.setState({Admins : response.data.totalAdmins })
        // })

    }


    render() {
        return (
            <div>
                <TopNav />
                <div className="row">

                    <div className="col col-lg-2"><AdminSideNav /></div>
                    <div className="col">

                        <div class="col-md-8 offset-md-2">
                            <br /><br />
                            <h4 align="center">Dashboard</h4>

                            <div class="card card-outline-secondary  text-dark">
                            
                                <div class="card-body">
                                    <div>
                                        <div align="center" className="container-sm">
                                            <div class="card-deck p-1" align="center" >
                                                <div className="row">
                                                <div className="col -8">
                                                <div class="card text-white  mb-3 w-15">
                                                    <div class="card-header text-white bg-dark">Number of System Backend Users</div>
                                                    <div class="card-body">
                                                        <h4 class="card-text">{this.state.totalUser}</h4>
                                                    </div>
                                                </div>
                                                </div>

                                                <div className="col -8">
                                                <div class="card text-white mb-3 w-15">
                                                    <div class="card-header text-white bg-dark">Number of Registered Buyer</div>
                                                    <div class="card-body">
                                                        <h4 class="card-text">{this.state.totalBuyer}</h4>
                                                    </div>
                                                </div>
                                                </div>

                                                <div class="card-deck">
                                                <div class="card text-white  mb-3 w-15">
                                                    <div class="card-header text-white bg-dark">Number of Registered Suppliers</div>
                                                    <div class="card-body">
                                                        <h4 class="card-text">{this.state.totalSupplier}</h4>
                                                    </div>
                                                </div>
                                                <div class="card text-white  mb-3 w-15">
                                                    <div class="card-header text-white bg-dark">Number of Unapproved Items </div>
                                                    <div class="card-body">
                                                        <h4 class="card-text">{this.state.totalUnapprove}</h4>
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
                    </div>
                </div>
                </div>
           
        )
    }
}

export default dashboard;