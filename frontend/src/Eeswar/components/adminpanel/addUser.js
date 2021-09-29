import React, { useState } from "react"
import axios from "axios"
import '../../../App.css'
import AdminSideNav from './adminpanelNavigationbar'
import TopNav from './topNav'


function Register() {


    
    const [email, setUsernameReg] = useState("");
    const [password, setPasswordReg] = useState("");
    const [type, setUserType] = useState("");

    function register(e) {
        e.preventDefault();

        const newUser = {

            email,
            password,
            type
        }

        axios.post("http://localhost:9999/userlogin/register", newUser).then(() => {
            alert("User Added")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <TopNav/>
        <div className="row">
        <div className="col col-lg-2"><AdminSideNav/></div>
        <div className="col">
            <br/><br/>
            <div class="col-md-8 offset-md-2">
               
            <div align="center">
                                <h1>User Register</h1>
                                <br />
                            </div>

                            <form>


                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" placeholder="example@gmail.com" onChange={(e) => { setUsernameReg(e.target.value); }} />
                                </div>
                                <br/>    
                                <div class="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" class="form-control" placeholder="*******" onChange={(e) => { setPasswordReg(e.target.value); }} />
                                </div>
                                <br/>
                                <div class="form-group">

                                    <label for="inputState" class="form-label">User Type</label>
                                    <select id="category" class="form-select" name="category" onChange={(e) => { setUserType(e.target.value); }}>
                                        <option selected>Choose...</option>
                                        <option value="admin">Admin</option>
                                        <option value="accountant">Accountant</option>
                                        <option value="productManager">Product Manager</option>
                                    </select>
                                </div>
                                <br/>
                                <div class="form-group"> 
                                <button type="submit" class="btn btn-primary" onClick={register}>Sign Up</button>
                                </div>
                            </form>
            </div>
        </div>
    </div>
        
    </div>
               

    );
}

export default Register;