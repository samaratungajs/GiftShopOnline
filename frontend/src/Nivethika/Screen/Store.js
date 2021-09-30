import React, { Component } from 'react';

import axios from 'axios';
import "./Gift.css";
import { Link } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Store extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      pickup_location: '',
      preferred_time: '',
      pickup_date: '',
      personal_message: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    }

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
          this.setState({ username: response.data.user.email })
          // console.log(this.state.email);
        }
      })
      .catch()
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
    let subject = {
      username: this.state.username,
      pickup_location: this.state.pickup_location,
      preferred_time: this.state.preferred_time,
      pickup_date: this.state.pickup_date,
      personal_message: this.state.personal_message,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone
    }
    console.log('Data to send', subject);
    console.log('Data to send', subject);
    axios.post('http://localhost:9999/delivery/delivery_pickup', subject)
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



                  <h4><label>Pickup Information</label></h4><br />
                  <div class="col-md-6">

                    <br /><select id="inputState" class="form-select" name="pickup_location" title="Nearest Delivery city" onChange={this.onChange}>
                      <option disabled selected hidden>Pickup location</option>
                      <option>Colombo</option>
                      <option>Jaffna</option>
                      <option>other</option>

                    </select>
                  </div>




                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label"></label>
                    <select id="inputState" class="form-select" name="preferred_time" placeholder="Nearest Delivery city" onChange={this.onChange}>


                      <option disabled selected hidden>Preferred time</option>
                      <option>Any Time (8AM-6PM)</option>
                      <option>Any Time (7AM-11PM)</option>
                      <option>Any Time (11AM-5PM)</option>

                    </select>
                  </div>



                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="date" class="form-control" id="inputAddress" placeholder="Pickup date" name="pickup_date" onChange={this.onChange} />
                  </div><br /><br />
                  <div class="col-6">

                  </div>

                  <div class="col-12">


                    <br /> <label for="floatingTextarea" >Personal Message</label>
                    <div class="form-floating">

                      <textarea class="form-control" placeholder="Ex:Thinking of you on your birthday,and Wishing you all the best!" id="floatingTextarea" name="personal_message" value={this.state.personal_message} onChange={this.onChange}></textarea>

                    </div>

                  </div>



                  <h4><label>Contact Information</label></h4>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder=" First name" id="author" name="firstname" value={this.state.firstname} onChange={this.onChange} />
                  </div>
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="text" class="form-control" placeholder="Last name" id="author" name="lastname" value={this.state.lastname} onChange={this.onChange} />
                  </div>

                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="email" class="form-control" id="inputAddress" placeholder="Your email" name="email" value={this.state.email} onChange={this.onChange} />
                  </div>

                  <div class="col-6">
                    <label for="inputAddress" class="form-label"></label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your phone" name="phone" value={this.state.phone} onChange={this.onChange} />
                  </div><br /><br />




                  <div></div>

                  <div class="col-6">
                    <div class="d-flex justify-content-center ">
                      <Link to={`/`}><button type="submit" className="btn btn-outline-primary" id="N-proceed">Back</button></Link>

                    </div>
                  </div>


                  <br /><br /><div class="col-6">
                    <div class="d-flex justify-content-center ">
                      <button type="submit" className="btn btn-primary" id="N-proceed">Proceed</button>
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

export default Store;