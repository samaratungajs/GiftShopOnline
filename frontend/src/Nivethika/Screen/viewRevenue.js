import React, { Component } from 'react';
import "./ProductScreen.css";
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import {Table, Column, Cell} from 'fixed-data-table';


import Navbar1 from '../SideNavbar/nav1';

import BasicTable from './BasicTable';
import "./Gift.css";
import Step from './paystepnavigation';
import Card from './cardpayment';
import Paypal from './paypal';

import Similar from '../Components/N-similarproduct';
import Topbar from '../../Malith/component/LandingPageComponent/topbar/Topbar';
import Footer from '../../Malith/component/LandingPageComponent/footer/Footer';
import cardpayment from './cardpayment';

class viewRevenue extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
  
        this.state = {
            selectedOption: 'card'                                                                                 
        }
    
    
}

    onChange(e) {
      
        this.setState({ selectedOption: e });
      
    }
   
   
  
     

    render() { 
        return (
          <div>
            <Navbar1/>
            <br/><br/><div class="input-group  col-md-3 offset-md-9">
  <div class="form-outline">
<input type="search" id="form1"placeholder="Search" class="form-control" />

  </div>
  <button type="button" class="btn btn-primary">
 <i class="fas fa-search"></i>
  </button>
</div>
                <div class="row">
                    
                <div class="col">
<div className="container">
        <div class="col-md-10 offset-md-1">

          <br />
          <div class="card card-outline-secondary p-3 mb-2  text-black border-secondary mb-3" color="blue">
            <div class="card-body">




                        <h3>Choose one</h3><hr />
                        
                  

                                <form onSubmit={this.onSubmit} class="row g-2 ">
                                    

                                <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Current date
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
   Select between
  </label>
</div>













                <div class="col-md-6 ">
                 
                  <input type="date" class="form-control" id="author" name="authorname" value={this.state.authorname} onChange={this.onChange} /><br/><br/>
                          </div>
                          
                          
                <div class="col-md-6">
                 
                  <input type="date" class="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.onChange} /><br/><br/>
                </div>
              



                <div class="col-12">
                  <div class="d-flex justify-content-center ">
                    <button type="submit" class="btn btn-primary">Generate Report</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
                            </div>
                            
                            </div>
                </div>
               
               

<div class="col">

                <div className="container">
        <div class="col-md-12 offset-md-0">

          <br />
          <div class="card card-outline-secondary p-3 mb-2  text-black border-secondary mb-3" color="blue">
                      <div class="card-body">
            
                        
                       <BasicTable/>
            </div>
          </div>
        </div>
                    </div>
                    
              </div>
              
              <div class="col-md-3 offset-md-8">
              <label>Total revenue</label>
              <input type="text" class="form-control" id="inputEmail4" name="email" align="right"value={this.state.email} onChange={this.onChange} /><br/><br/>
           
                </div>
                    </div>
         </div>
                
        )
    }



}

export default viewRevenue;