import React, { Component } from 'react';

import axios from 'axios';
import "./Gift.css";
import { Link } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Store extends Component{
    constructor(props) {
        super(props);

       
        this.state = {
            startDate:new Date()
}
      
    }

    
render() {
        return (
            <div>

<div className="container">
        <div class="col-md-6 offset-md-3">

          <br />
          <div class="card card-outline-secondary p-3 mb-2   text-black border-secondary mb-3" color="blue">
            <div class="card-body">


                                <form onSubmit={this.onSubmit} class="row g-2 ">
                                 
                                 
                                    
                                  <h4><label>Pickup Information</label></h4><br/>
                                    <div class="col-md-6">
                 
                                    <br/><select id="inputState" class="form-select" name="researchfield" title="Nearest Delivery city" onChange={this.onChange}>
                                        <option disabled selected hidden>Pickup location</option>
                                            <option>Colombo</option>
                                            <option>Jaffna</option>
                                            <option>other</option>

                                        </select>
                                    </div>
                                    
                                  

                                    
                                    <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label"></label>
                                        <select id="inputState" class="form-select" name="researchfield" placeholder="Nearest Delivery city" onChange={this.onChange}>
                                      
                 <label for="inputState" class="form-label">Preferred time</label>
                 <option disabled selected hidden>Preferred time</option>
                 <option>Any Time (8AM-6PM)</option>
                          <option>Any Time (7AM-11PM)</option>
                          <option>Any Time (11AM-5PM)</option>

                            </select>
                                    </div>
                                    


                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="date" class="form-control" id="inputAddress" placeholder="Pickup date" name="papertitle"  onChange={this.onChange} />
                                    </div><br/><br/>
                <div class="col-6">
                
                                    </div>

                                    <div class="col-12">
                                        

                                        <br/> <label for="floatingTextarea" >Personal Message</label>
                     <div class="form-floating">
     
                       <textarea class="form-control" placeholder="Ex:Thinking of you on your birthday,and Wishing you all the best!" id="floatingTextarea" name="abstract" value={this.state.abstract} onChange={this.onChange}></textarea>
     
                     </div>
                     
                                    </div>
                                    


                                    <h4><label>Contact Information</label></h4> 
                <div class="col-md-6 ">
                  <label for="inputEmail4" class="form-label"></label>
                  <input type="text" class="form-control" placeholder=" First name" id="author" name="fname"  onChange={this.onChange} />
                </div>
                <div class="col-md-6 ">
                <label for="inputEmail4" class="form-label"></label>
                  <input type="text" class="form-control" placeholder="Last name" id="author" name="fname"  onChange={this.onChange} />
                </div>
                
                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="email" class="form-control" id="inputAddress" placeholder="Your email" name="papertitle"  onChange={this.onChange} />
                                    </div>      

                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Your phone" name="papertitle"  onChange={this.onChange} />
                                    </div><br/><br/>


                                  

<div></div>

<div class="col-6">
                        <div class="d-flex justify-content-center ">
                        <Link to={`/`}><button type="submit" className="btn btn-outline-primary" id="N-proceed">Back</button></Link>
          
                  </div>
                </div>


                <br/><br/><div class="col-6">
                  <div class="d-flex justify-content-center ">
                  <Link to={`/payment`}><button type="submit" className="btn btn-primary" id="N-proceed">Proceed</button></Link>
                  </div>
                                    </div>
                                    
                             
                                    
                 
              </form>
            </div>
          </div>
        </div>
      </div>
               </div>
         
                
        )
    }



}

export default Store ;