import React, { Component } from 'react';

import axios from 'axios';
import "./Gift.css";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Gift extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      username: '',
      Recipient_firstname: '',
      Recipient_lastname: '',
      Recipient_addressline1: '',
      Recipient_city: '',
      Recipient_addressline2: '',
      Recipient_mobile_no: '',
      Nearest_Delivery: '',
      Location_type: '',
      preferred_time: '',
      delivery_date: '',
      delivery_instructions: '',
      senders_firstname: '',
      senders_lastname: '',
      senders_phone: '',
      senders_email: ''
    }

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {


    const access_token = localStorage.getItem('token')


    let config = {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    }
    axios.get(
      'http://localhost:9999/buyerlogin/post',
      config)
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message)

        } else {
          console.log(response.data.user.email);
          this.setState({ email: response.data.user.email })
          // console.log(this.state.email);
        }
      })
      .catch()
  }


  onSubmit(e) {
    e.preventDefault();
    let subject = {
      Username: this.state.email,
      Recipient_firstname: this.state.Recipient_firstname,
      Recipient_lastname: this.state.Recipient_lastname,
      Recipient_addressline1: this.state.Recipient_addressline1,
      Recipient_city: this.state.Recipient_city,
      Recipient_addressline2: this.state.Recipient_addressline2,
      Recipient_mobile_no: this.state.Recipient_mobile_no,
      Nearest_Delivery: this.state.Nearest_Delivery,
      Location_type: this.state.Location_type,
      preferred_time: this.state.preferred_time,
      delivery_date: this.state.delivery_date,
      delivery_instructions: this.state.delivery_instructions,
      senders_firstname: this.state.senders_firstname,
      senders_lastname: this.state.senders_lastname,
      senders_phone: this.state.senders_phone,
      senders_email: this.state.senders_email


    }
    console.log('Data to send', subject);
    console.log('Data to send', subject);
    axios.post('http://localhost:9999/delivery/delivery_gift', subject)
      .then(response => {
        alert('Data successfully inserted');
        window.location = `/payment`
      }).catch(error => {
        console.log(error.message);
        alert(error.message);
      })
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

                  <div></div> {this.props.Email}
                  <label>Contact Information</label>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder="Receipients first name" id="author" name="Recipient_firstname" value={this.state.Recipient_firstname} required="required" onChange={this.onChange} />
                  </div>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder="Receipients Last name" id="author" name="Recipient_lastname" required="required" value={this.state.Recipient_lastname} onChange={this.onChange} />
                  </div>
                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 1" required="required" name="Recipient_addressline1" value={this.state.Recipient_addressline1} onChange={this.onChange} />
                  </div>

                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="City" name="Recipient_city" required="required" value={this.state.Recipient_city} onChange={this.onChange} />
                  </div>
                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 2" required="required" name="Recipient_addressline2" value={this.state.Recipient_addressline2} onChange={this.onChange} />
                  </div>

                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Receipients mobile phone no" required="required" name="Recipient_mobile_no" value={this.state.Recipient_mobile_no} onChange={this.onChange} />
                  </div><br /><br />


                  <br /><br /><br /><br /><h4><label>Delivery Information</label></h4><br />
                  <div class="col-md-6">

                    <br /><select id="inputState" class="form-select" name="Nearest_Delivery" required="required" title="Nearest Delivery city" onChange={this.onChange}>
                      <option disabled selected hidden>Nearest Delivery City</option>
                      <option>Colombo</option>
                      <option>Jaffna</option>
                      <option>Kandy</option>
                      <option>other</option>

                    </select>
                  </div>


                  <div class="col-md-6">

                    <br /> <select id="inputState" class="form-select" name="Location_type" required="required" placeholder="Nearest Delivery city" onChange={this.onChange}>
                      <option disabled selected hidden>Location type</option>
                      <option>House/Residence</option>
                      <option>Office</option>
                      <option>Apartment/flat</option>
                      <option>Birthday party</option>

                    </select>
                  </div>



                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label"></label>
                    <select id="inputState" class="form-select" required="required" name="preferred_time" placeholder="Nearest Delivery city" onChange={this.onChange}>

                      <label for="inputState" class="form-label">Preferred time</label>
                      <option disabled selected hidden>Preferred time</option>
                      <option>Any Time (8AM-6PM)</option>
                      <option>Any Time (7AM-11PM)</option>
                      <option>Any Time (11AM-5PM)</option>

                    </select>
                  </div>



                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="date" class="form-control" id="inputAddress" required="required" placeholder="Delivery date" name="delivery_date" onChange={this.onChange} />
                  </div><br /><br />          <div class="col-12">


                    <br /> <label for="floatingTextarea" >Delivery Instructions (Optional) (Please do not use this section to request any preferred time for delivery other than the selected time slot)</label>
                    <div class="form-floating">

                      <textarea class="form-control" placeholder="Leave a comment here" required="required" id="floatingTextarea" name="delivery_instructions" value={this.state.abstract} onChange={this.onChange}></textarea>

                    </div>

                  </div>



                  <div></div>
                  <br /><br /><h4><label>Senders Information</label></h4>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder=" First name" id="author" required="required" name="senders_firstname" value={this.state.senders_firstname} onChange={this.onChange} />
                  </div>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder=" Last name" id="author" name="senders_lastname" required="required" value={this.state.senders_lastname} onChange={this.onChange} />
                  </div>
                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Senders phone" name="senders_phone" value={this.state.senders_phone} onChange={this.onChange} />
                  </div><br /><br />

                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="email" class="form-control" id="inputAddress" placeholder="Senders email" required="required" name="senders_email" value={this.state.senders_email} onChange={this.onChange} />
                  </div><br /><br />

                  <div class="col-6">
                    <div class="d-flex justify-content-center ">
                      <Link to={`/`}><button type="submit" className="btn btn-outline-primary" id="N-proceed">Back</button></Link>
                    </div>
                  </div>


                  <br /><br /><div class="col-6">
                    <div class="d-flex justify-content-center ">

                      <button type="submit" className="btn btn-primary" id="N-proceed1">Proceed</button>

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

export default Gift;