import React, { Component } from 'react';
import "./ProductScreen.css";
import axios from 'axios';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search1 from './Searchexample'


import Navbar1 from '../SideNavbar/nav1';
import Example from './Example';
import Example2 from './Example2';
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
      this.onChange1 = this.onChange1.bind(this);
        this.state = {
          value: 'option1',
          frist: '',
          second: '',
          searchInput:'',
    date:new Date().toDateString() + ""
        }
    
    
}

    onChange(e) {
      
        this.setState({value:e.target.value });
      
    }
   
    onChange1(e) {
      this.setState({ [e.target.name]: e.target.value });
  }
     
 

  render() {
  
        return (
          <div>
           
            <br /><br />
            
         
                <div class="row">
                    
                <div class="col">
<div className="container">
        <div class="col-md-10 offset-md-1">

          <br />
          <div class="card card-outline-secondary p-3 mb-2  text-black border-secondary mb-3" color="blue">
            <div class="card-body">

            {this.state.date}


                        <h3>Choose one</h3><hr />
                        
                  

                                <form onSubmit={this.onSubmit} class="row g-2 " onChange={this.onChange}>
                                    

                                <div class="form-check"  >
                            <input class="form-check-input" type="radio" name="option1" id="exampleRadios1" value="option1" onChange={this.onChange} checked={this.state.value=='option1'}/>
  <label class="form-check-label" for="exampleRadios1" >
    Current date
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="option2" id="exampleRadios2" value="option2"onChange={this.onChange} checked={this.state.value=='option2'} />
  <label class="form-check-label" for="exampleRadios2">
   Select between
  </label>
</div>










                <div class="col-md-6 ">
                 
                  <input type="date" class="form-control" id="author" name="first" value={this.state.first} onChange={this.onChange1} /><br/><br/>
                          </div>
                          
                <div class="col-md-6">
                 
                  <input type="date" class="form-control" id="inputEmail4" name="second" value={this.state.second} onChange={this.onChange1} /><br/><br/>
                </div>
              



                <div class="col-12">
                  <div class="d-flex justify-content-center ">
                    
                              
                           
                           
                           
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
            
                        {this.state.value == 'option1' && <div>
                          
                        <Example/>
                        </div>}
                        {this.state.value== 'option2' && <div>
                          
                          <Route render={(props) => (<Example2  {...props} first={this.state.first} second={this.state.second} searchInput={this.state.searchInput}/>)} exact></Route>
                      
                        </div>}
                      
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

export default viewRevenue;