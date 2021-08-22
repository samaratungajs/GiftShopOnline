import React, { Component } from 'react';

import axios from 'axios';
import "./Gift.css";

import { Link } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Buy extends Component{
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
                                    <h4><label>Receipients Information</label></h4>

                                    <div></div>
                                    <label>Contact Information</label>
                <div class="col-md-6 ">
                  <label for="inputEmail4" class="form-label"></label>
                  <input type="text" class="form-control" placeholder="Receipients first name" id="author" name="fname"  onChange={this.onChange} />
                </div>
                <div class="col-md-6 ">
                <label for="inputEmail4" class="form-label"></label>
                  <input type="text" class="form-control" placeholder="Receipients Last name" id="author" name="fname"  onChange={this.onChange} />
                </div>
                <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 1" name="papertitle"  onChange={this.onChange} />
                                    </div>

                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="City" name="papertitle"  onChange={this.onChange} />
                                    </div>
                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 2" name="papertitle"  onChange={this.onChange} />
                                    </div>      

                                    <div class="col-6">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Receipients mobile phone no" name="papertitle"  onChange={this.onChange} />
                                    </div><br/><br/>

                                    
                                    <br/><br/><br/><br/><h4><label>Delivery Information</label></h4><br/>
                                    <div class="col-md-6">
                 
                                    <br/><select id="inputState" class="form-select" name="researchfield" title="Nearest Delivery city" onChange={this.onChange}>
                                        <option disabled selected hidden>Nearest Delivery City</option>
                                            <option>Colombo</option>
                                            <option>Jaffna</option>
                                            <option>other</option>

                                        </select>
                                    </div>
                                    

                                    <div class="col-md-6">
                 
                <br/> <select id="inputState" class="form-select" name="researchfield" placeholder="Nearest Delivery city" onChange={this.onChange}>
                            <option disabled selected hidden>location type</option>
                            <option>House/Residence</option>
                          <option>Office</option>
                          <option>Apartment/flat</option>
                            <option>Birthday party</option>

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
                  <input type="date" class="form-control" id="inputAddress" placeholder="Delivery date" name="papertitle"  onChange={this.onChange} />
                                    </div><br/><br/>
                <div class="col-6">
                
                                    </div>

                                    <div class="col-12">
                                        

                                        <br/> <label for="floatingTextarea" >Delivery Instructions (Optional) (Please do not use this section to request any preferred time for delivery other than the selected time slot)</label>
                     <div class="form-floating">
     
                       <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="abstract" value={this.state.abstract} onChange={this.onChange}></textarea>
     
                     </div>
                     
                                         </div>

                                  

<div></div>
<br/><br/><h4><label>Your Information</label></h4>

<div class="col-6">
<label for="inputAddress" class="form-label"></label>
<input type="text" class="form-control" id="inputAddress" placeholder="Your phone" name="papertitle"  onChange={this.onChange} />
</div><br/><br/>

<div class="col-6">
<label for="inputAddress" class="form-label"></label>
<input type="email" class="form-control" id="inputAddress" placeholder="Your email" name="papertitle"  onChange={this.onChange} />
</div><br/><br/>
    
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

export default Buy ;