import React, { useState } from "react"
import axios from "axios"
import '../../../App.css'
import img from "../../photos/sale.jpg"
import Navbar from '../SideNavbar/Navbar';

function Register() {

    const [firstName, setFirstnameReg] = useState("");
    const [lastName, setLastnameReg] = useState("");
    const [address, setAddressReg] = useState("");
    const [NIC, setNICReg] = useState("");
    const [pNumber, setPnumberReg] = useState("");
    const [email, setUsernameReg] = useState("");
    const [password, setPasswordReg] = useState("");

    function register(e) {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            address,
            NIC,
            pNumber,
            email,
            password
        }

        axios.post("http://localhost:9999/supplierlogin/register", newUser).then(() => {
            alert("User Added")
            window.location = `/supplier/login`
        }).catch((err) => {
            alert(err)
        })
    }

    return (



        <div class='some-page-wrapper'>
  <div class='row'>

    
   
    <div class='column'>
      <div class='blue-column'>
        <img src={img} ></img>
      </div>
    </div>
    
    
    
    
    
    
    <div class='column'>
      <div class='green-column'>
      <div class="container">
        <div align="center">
            <h1>Supplier Register</h1>
            <br/>
        </div>

        <form class="">
            
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="fname">First Name</label>
            <input type="text" class="form-control"  placeholder="First Name" onChange={(e) => { setFirstnameReg(e.target.value); }}/>
          </div>
          <div class="form-group col-md-6">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control"  placeholder="Last Name" onChange={(e) => { setLastnameReg(e.target.value); }}/>
          </div>
        </div>
        <div class="form-group">
          <label for="number">Phone Number</label>
          <input type="number" class="form-control"  placeholder="0XXXXXXXXX" onChange={(e) => { setPnumberReg(e.target.value); }}/>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" class="form-control"  placeholder="Address" onChange={(e) => { setAddressReg(e.target.value); }}/>
        </div>

        <div class="form-group">
          <label for="nic">NIC</label>
          <input type="text" class="form-control"  placeholder="XXXXXXXXXX" onChange={(e) => { setNICReg(e.target.value); }} />
        </div> 


        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="example@gmail.com" onChange={(e) => { setUsernameReg(e.target.value); }}/>
        </div>
        
        <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" placeholder="*******" onChange={(e) => { setPasswordReg(e.target.value); }}/>
        </div>
          
        
        
        <button type="submit" class="btn btn-primary" onClick={register}>Create My Account</button>
      </form>
      
      </div>
      </div>
    </div>
  </div>
</div>
        
    );
}

export default Register;